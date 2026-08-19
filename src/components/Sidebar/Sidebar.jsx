import "./Sidebar.css";

export default function Sidebar({ selectedCategory, onSelectCategory }) {
  return (
    <nav className="sidebar">
      <button onClick={() => onSelectCategory("all")}>HOME</button>
      <button onClick={() => onSelectCategory("all")}>POPULAR</button>

      <h2>SUBREDDITS</h2>
      <ul>
        <li>
          <button onClick={() => onSelectCategory("funny")}>r/funny</button>
        </li>
        <li>
          <button onClick={() => onSelectCategory("technology")}>
            r/technology
          </button>
        </li>
        <li>
          <button onClick={() => onSelectCategory("memes")}>r/memes</button>
        </li>
        <li>
          <button onClick={() => onSelectCategory("askreddit")}>
            r/askreddit
          </button>
        </li>
      </ul>
      <button className="create-post-button">CREATE POST</button>
    </nav>
  );
}
