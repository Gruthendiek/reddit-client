import { mount } from "enzyme";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../../features/posts/postsSlice.js";
import FeedControls from "./FeedControls";

test("dispatches the entered search term", () => {
  const store = configureStore({ reducer: { posts: postsReducer } });
  const wrapper = mount(
    <Provider store={store}>
      <FeedControls />
    </Provider>,
  );

  wrapper.find("#searchInput").simulate("change", {
    target: { value: "cats" },
  });
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });

  expect(store.getState().posts.searchTerm).toBe("cats");
});

test("dispatches the selected sort order", () => {
  const store = configureStore({ reducer: { posts: postsReducer } });
  const wrapper = mount(
    <Provider store={store}>
      <FeedControls />
    </Provider>,
  );

  wrapper.find("select").simulate("change", { target: { value: "top" } });

  expect(store.getState().posts.sort).toBe("top");
});
