import { shallow } from "enzyme";
import Header from "./Header";

test("calls the theme toggle handler and exposes the next theme", () => {
  const onToggleTheme = jest.fn();
  const wrapper = shallow(
    <Header theme="dark" onToggleTheme={onToggleTheme} />,
  );

  const toggle = wrapper.find(".theme-toggle");
  toggle.simulate("click");

  expect(onToggleTheme).toHaveBeenCalledTimes(1);
  expect(toggle.prop("aria-label")).toBe("Switch to light theme");
  expect(toggle.text()).toBe("☀️");
});

test("shows the dark mode control when the theme is light", () => {
  const wrapper = shallow(<Header theme="light" onToggleTheme={() => {}} />);

  expect(wrapper.find(".theme-toggle").text()).toBe("🌙");
  expect(wrapper.find(".theme-toggle").prop("aria-label")).toBe(
    "Switch to dark theme",
  );
});
