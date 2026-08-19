import { test, expect } from "@playwright/test";
import { readFile } from "node:fs/promises";

const mockPosts = await readFile(
  new URL("../../mock-data/popular.json", import.meta.url),
  "utf8",
);

async function openApp(page) {
  await page.route("**/raw.githubusercontent.com/**/popular.json", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: mockPosts,
    }),
  );
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Home Feed" })).toBeVisible();
  await expect(page.locator(".post-card").first()).toBeVisible();
}

test("loads posts and switches between dark and light themes", async ({
  page,
}) => {
  await openApp(page);

  await expect(page.locator(".app")).toHaveClass(/dark/);
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(page.locator(".app")).toHaveClass(/light/);
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator(".app")).toHaveClass(/dark/);
});

test("searches for a post and opens and closes its details", async ({
  page,
}) => {
  await openApp(page);

  await page.locator("#searchInput").fill("Hayden Panettiere");
  await page.locator("#searchInput").press("Enter");
  await expect(
    page.getByRole("heading", { name: /Hayden Panettiere/ }),
  ).toBeVisible();
  await expect(page.locator(".post-card")).toHaveCount(1);

  await page.locator(".post-card").click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("dialog")).toContainText("Hayden Panettiere");

  await page.getByRole("button", { name: "Close post detail" }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
});
