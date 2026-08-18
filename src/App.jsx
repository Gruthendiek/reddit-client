import { fetchPopularPosts } from "./services/redditApi.js";
import { timeAgo } from "./utilities/timeAgo.js";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import PostCard from "./components/PostCard/PostCard.jsx";
import FeedControls from "./components/FeedControls/FeedControls.jsx";
import "./App.css";

function App() {
  const data = fetchPopularPosts();
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
      videoUrl: child.data.secure_media?.reddit_video?.fallback_url
    };
  });
  return (
    <>
      <Header />
      <div className="app-layout">
        <Sidebar />
        <main className="main-feed">
          <h2>Home Feed</h2>
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
