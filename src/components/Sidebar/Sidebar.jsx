import './Sidebar.css';

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <button>HOME</button>
      <button>POPULAR</button>

      <h2>SUBREDDITS</h2>
      <ul>
        <li>
          <button>r/reactjs</button>
        </li>
        <li>
          <button>r/javascript</button>
        </li>
        <li>
          <button>r/memes</button>
        </li>
        <li>
          <button>r/askreddit</button>
        </li>
      </ul>
      <button className="create-post-button">CREATE POST</button>
    </nav>
  );
}
