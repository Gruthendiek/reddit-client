import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPosts } from "./features/posts/postsSlice.js";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import PostCard from "./components/PostCard/PostCard.jsx";
import FeedControls from "./components/FeedControls/FeedControls.jsx";
import PostDetail from "./components/PostDetail/PostDetail.jsx";
import "./App.css";

function App() {
  const postsPerPage = 10;
  const [theme, setTheme] = useState("dark");
  const [pagination, setPagination] = useState({
    filterKey: "",
    count: postsPerPage,
  });
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const posts = useSelector((state) => state.posts.posts);
  const searchTerm = useSelector((state) => state.posts.searchTerm);
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  const categoryPosts = posts.filter((post) => {
    if (selectedCategory === "all") {
      return true;
    }
    return post.subreddit.toLowerCase() === `r/${selectedCategory}`;
  });

  const filteredPosts = categoryPosts.filter((post) => {
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
  const filterKey = `${selectedCategory}|${searchTerm}|${sort}`;
  const visiblePostCount =
    pagination.filterKey === filterKey ? pagination.count : postsPerPage;
  const visiblePosts = sortedPosts.slice(0, visiblePostCount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div className={`app ${theme}`}>
      <Header
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark"
          )
        }
      />
      <div className="app-layout">
        <Sidebar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <main className="main-feed">
          <h2>Home Feed</h2>
          {loading && <p>Loading posts...</p>}
          {error && <p>Failed to load posts: {error}</p>}
          <FeedControls />
          {visiblePosts.map((post, index) => (
            <PostCard
              post={post}
              onSelect={setSelectedPost}
              key={`${post.createdUtc}-${index}`}
            />
          ))}
          {visiblePostCount < sortedPosts.length && (
            <button
              className="load-more-button"
              onClick={() =>
                setPagination({
                  filterKey,
                  count: visiblePostCount + postsPerPage,
                })
              }
            >
              Load more
            </button>
          )}
        </main>
      </div>
      {selectedPost && (
        <PostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
}

export default App;
