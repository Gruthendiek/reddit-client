import { shallow } from "enzyme";
import Sidebar from "./Sidebar";

test("selects a subreddit when its button is clicked", () => {
  const onSelectCategory = jest.fn();
  const wrapper = shallow(
    <Sidebar selectedCategory="all" onSelectCategory={onSelectCategory} />,
  );

  wrapper
    .find("button")
    .filterWhere((button) => button.text() === "r/funny")
    .simulate("click");

  expect(onSelectCategory).toHaveBeenCalledWith("funny");
});
