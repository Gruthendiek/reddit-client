import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./features/posts/postsSlice.js";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import PostCard from "./components/PostCard/PostCard.jsx";
import FeedControls from "./components/FeedControls/FeedControls.jsx";
import "./App.css";

function App() {
  const posts = useSelector((state) => state.posts.posts);
  const searchTerm = useSelector((state) => state.posts.searchTerm);
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  const filteredPosts = posts.filter((post) => {
    const searchableText =
      `${post.title} ${post.subreddit} ${post.author} ${post.content}`.toLowerCase();
    return searchableText.includes(normalizedSearchTerm);
  });
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);
  const sort = useSelector((state) => state.posts.sort);
  const sortedPosts = [...filteredPosts];
  if (sort === "new") {
    sortedPosts.sort((a, b) => b.createdUtc - a.createdUtc);
  }
  if (sort === "top") {
    sortedPosts.sort((a, b) => b.score - a.score);
  }
  if (sort === "hot") {
    sortedPosts.sort((a, b) => {
      const scoreA = a.score + a.createdUtc / 1000000;
      const scoreB = b.score + b.createdUtc / 1000000;
      return scoreB - scoreA;
    });
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className="app-layout">
        <Sidebar />
        <main className="main-feed">
          <h2>Home Feed</h2>
          {loading && <p>Loading posts...</p>}
          {error && <p>Failed to load posts: {error}</p>}
          <FeedControls />
          {sortedPosts.map((post, index) => (
            <PostCard
              title={post.title}
              subreddit={post.subreddit}
              author={post.author}
              content={post.content}
              time={post.time}
              score={post.score}
              comments={post.comments}
              postType={post.postType}
              mediaUrl={post.mediaUrl}
              videoUrl={post.videoUrl}
              key={index}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
