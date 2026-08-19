import { useEffect } from "react";
import "./PostDetail.css";

const mockComments = [
  {
    author: "user123",
    text: "This is a great post!",
  },
  {
    author: "redditFan",
    text: "Thanks for sharing this.",
  },
];

export default function PostDetail({ post, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="post-detail-backdrop" onClick={onClose}>
      <section
        className="post-detail-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="post-detail-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="post-detail-close"
          onClick={onClose}
          aria-label="Close post detail"
        >
          ×
        </button>
        <div className="post-detail-metadata">
          <span>{post.subreddit}</span>
          <span>•</span>
          <span>Posted by u/{post.author}</span>
          <span>•</span>
          <span>{post.time}</span>
        </div>
        <h2 id="post-detail-title">{post.title}</h2>
        <p className="post-detail-content">{post.content}</p>
        {post.postType === "image" && (
          <img
            className="post-detail-image"
            src={post.mediaUrl}
            alt={post.title}
          />
        )}
        {post.postType === "link" && (
          <a href={post.mediaUrl} target="_blank" rel="noopener noreferrer">
            {post.mediaUrl}
          </a>
        )}
        {post.postType === "hosted:video" && post.videoUrl && (
          <video className="post-detail-video" controls>
            <source src={post.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="post-detail-stats">
          <span>Score: {post.score}</span>
          <span>Comments: {post.comments}</span>
        </div>
      </section>
    </div>
  );
}
