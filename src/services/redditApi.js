export async function fetchPopularPosts() {
  const response = await fetch(
    "https://raw.githubusercontent.com/Gruthendiek/reddit-client/refs/heads/main/mock-data/popular.json"
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`)
  }
  const data = await response.json();
  return data;
}