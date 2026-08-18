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
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);
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
          {error && <p>Failed to load post: {error}</p>}
          <FeedControls />
          {posts.map((post, index) => (
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
