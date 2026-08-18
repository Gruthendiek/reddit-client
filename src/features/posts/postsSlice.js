import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPopularPosts } from "../../services/redditApi.js";
import { timeAgo } from "../../utilities/timeAgo.js";

const initialState = {
  posts: [],
  loading: false,
  error: null,
  searchTerm: "",
  sort: "best",
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const data = await fetchPopularPosts();
  const posts = data.data.children.map((child) => {
    return {
      title: child.data.title,
      subreddit: child.data.subreddit_name_prefixed,
      author: child.data.author,
      content: child.data.selftext,
      score: child.data.score,
      comments: child.data.num_comments,
      time: timeAgo(child.data.created_utc),
      postType: child.data.post_hint,
      mediaUrl: child.data.url,
      videoUrl: child.data.secure_media?.reddit_video?.fallback_url,
      createdUtc: child.data.created_utc,
    };
  });

  return posts;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default postsSlice.reducer;
export const { setPosts, setSearchTerm, setSort } = postsSlice.actions;
