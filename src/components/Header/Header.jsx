import './Header.css'

export default function Header() {
  return (
    <header>
      <div className="header-brand">
        <h1>Reddit Explorer</h1>
      </div>
      <div className="header-search">
        <input type="text" placeholder="Search Reddit" />
        <button className="search-button">🔍</button>
        <select>
          <option value="">Sort</option>
          <option value="best">Best</option>
          <option value="hot">Hot</option>
          <option value="new">New</option>
          <option value="top">Top</option>
        </select>
      </div>
      <div className="header-actions">
        <button className="profile-button">👤 Hi, Josh</button>
        <button className="theme-toggle">☀️</button>
      </div>
    </header>
  );
}
