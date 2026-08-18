import "./PostCard.css";

export default function PostCard({
  title,
  subreddit,
  author,
  content,
  time,
  score,
  comments,
  postType,
  mediaUrl,
  videoUrl
}) {
  return (
    <article>
      <header>
        <div className="post-metadata">
          <span>{subreddit}</span>
          <span>•</span>
          <span>Posted by u/{author}</span>
          <span>•</span>
          <span>{time}</span>
        </div>
      </header>
      <div className="post-body">
        <div className="votes">
          <button>↑</button>
          <span>{score}</span>
          <button>↓</button>
        </div>
        <div className="post-content">
          <h2>{title}</h2>
          <p>{content}</p>
          {postType === "image" && <img src={mediaUrl} alt={title} />}
          {postType === "link" && (
            <div className="link-preview">
              <span>🔗</span>
              <a href={mediaUrl} target="_blank" rel="noopener noreferrer">
                {mediaUrl}
              </a>
            </div>
          )}
          {postType === "hosted:video" && videoUrl && (
            <video className="post-video" controls>
              <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          )}
          <footer>
            <button className="comment-button">💬 {comments} Comments</button>
            <button className="share-button">Share</button>
            <button className="save-button">Save</button>
          </footer>
        </div>
      </div>
    </article>
  );
}
