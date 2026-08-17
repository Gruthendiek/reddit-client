import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import PostCard from "./components/PostCard/PostCard.jsx";
import FeedControls from "./components/FeedControls/FeedControls.jsx";
import "./App.css";

function App() {
  const posts = [
    {
      title: "First post title",
      subreddit: "r/reactjs",
      author: "josh",
      content: "This is the first content",
      time: "2h ago",
      score: 123,
      comments: 12,
    },
    {
      title: "Second post title",
      subreddit: "r/javascript",
      author: "tim",
      content: "This is the second content",
      time: "4h ago",
      score: 456,
      comments: 345,
    },
    {
      title: "Third post title",
      subreddit: "r/memes",
      author: "kai",
      content: "This is the third content",
      time: "6h ago",
      score: 789,
      comments: 678,
    },
    {
      title: "Fourth post title",
      subreddit: "r/askreddit",
      author: "shaun",
      content: "This is the fourth content",
      time: "1d ago",
      score: 147,
      comments: 90,
    },
  ];
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
              key={index}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
