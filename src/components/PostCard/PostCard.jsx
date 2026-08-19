import "./PostCard.css";

export default function PostCard({ post, onSelect }) {
  const handleClick = (event) => {
    if (event.target.closest("button, a")) {
      return;
    }
    onSelect(post);
  };

  const handleKeyDown = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(post);
    }
  };

  return (
    <article
      className="post-card"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Open post: ${post.title}`}
    >
      <header>
        <div className="post-metadata">
          <span>{post.subreddit}</span>
          <span>•</span>
          <span>Posted by u/{post.author}</span>
          <span>•</span>
          <span>{post.time}</span>
        </div>
      </header>
      <div className="post-body">
        <div className="votes">
          <button>↑</button>
          <span>{post.score}</span>
          <button>↓</button>
        </div>
        <div className="post-content">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {post.postType === "image" && (
            <img src={post.mediaUrl} alt={post.title} />
          )}
          {post.postType === "link" && (
            <div className="link-preview">
              <span>🔗</span>
              <a href={post.mediaUrl} target="_blank" rel="noopener noreferrer">
                {post.mediaUrl}
              </a>
            </div>
          )}
          {post.postType === "hosted:video" && post.videoUrl && (
            <video className="post-video" controls>
              <source src={post.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <footer>
            <button className="comment-button">
              💬 {post.comments} Comments
            </button>
            <button className="share-button">Share</button>
            <button className="save-button">Save</button>
          </footer>
        </div>
      </div>
    </article>
  );
}
