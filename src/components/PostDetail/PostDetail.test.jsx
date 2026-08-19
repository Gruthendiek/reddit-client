import { mount } from "enzyme";
import PostDetail from "./PostDetail";

const post = {
  title: "A detailed post",
  subreddit: "r/testing",
  author: "tester",
  time: "1h ago",
  score: 42,
  content: "Post details",
  comments: 3,
  postType: "text",
};

test("renders details and closes from the close button", () => {
  const onClose = jest.fn();
  const wrapper = mount(<PostDetail post={post} onClose={onClose} />);

  expect(wrapper.find('[role="dialog"] h2').text()).toBe(post.title);
  wrapper.find(".post-detail-close").simulate("click");

  expect(onClose).toHaveBeenCalledTimes(1);
});

test("closes when Escape is pressed", () => {
  const onClose = jest.fn();
  mount(<PostDetail post={post} onClose={onClose} />);

  document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

  expect(onClose).toHaveBeenCalledTimes(1);
});
