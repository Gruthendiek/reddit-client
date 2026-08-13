import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import PostCard from "./components/PostCard/PostCard.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="app-layout">
        <Sidebar />
        <main className="main-feed">
          <h2>Home Feed</h2>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </main>
      </div>
    </>
  );
}

export default App;
