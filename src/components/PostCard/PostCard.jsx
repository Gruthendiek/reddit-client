import "./PostCard.css";

export default function PostCard() {
  return (
    <article>
      <header>
        <div className="post-metadata">
          <span>r/reactjs</span>
          <span>•</span>
          <span>Posted by u/user</span>
          <span>•</span>
          <span>2h ago</span>
        </div>
      </header>
      <div className="post-body">
        <div className="votes">
          <button>↑</button>
          <span>123</span>
          <button>↓</button>
        </div>
        <div className="post-content">
          <h2>My Reddit Post Title</h2>
          <p>This is an example post content.</p>
          <footer>
            <button className="comment-button">💬 10 Comments</button>
            <button className="share-button">Share</button>
            <button className="save-button">Save</button>
          </footer>
        </div>
      </div>
    </article>
  );
}
