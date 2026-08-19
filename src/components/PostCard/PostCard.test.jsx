import { mount, shallow } from "enzyme";
import PostCard from "./PostCard";

const post = {
  title: "Test Reddit Post",
  subreddit: "r/reactjs",
  author: "testuser",
  time: "2h ago",
  score: 100,
  content: "This is a test post.",
  comments: 10,
  postType: "text",
};

test("renders post metadata and content", () => {
  const wrapper = shallow(<PostCard post={post} onSelect={() => {}} />);

  expect(wrapper.find("h2").text()).toBe(post.title);
  expect(wrapper.find(".post-metadata").text()).toContain("r/reactjs");
  expect(wrapper.find(".comment-button").text()).toContain("10 Comments");
});

test("selects the post when the card is clicked", () => {
  const onSelect = jest.fn();
  const wrapper = mount(<PostCard post={post} onSelect={onSelect} />);

  wrapper
    .find("article")
    .simulate("click", { target: wrapper.find("article").getDOMNode() });

  expect(onSelect).toHaveBeenCalledWith(post);
});

test("does not select the post when an action button is clicked", () => {
  const onSelect = jest.fn();
  const wrapper = mount(<PostCard post={post} onSelect={onSelect} />);

  wrapper.find(".save-button").simulate("click");

  expect(onSelect).not.toHaveBeenCalled();
});
