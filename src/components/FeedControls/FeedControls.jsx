import "./FeedControls.css";

export default function FeedControls() {
  return (
    <form className="feed-search">
      <label htmlFor="searchInput">Search posts</label>
      <input type="text" id="searchInput" placeholder="Search Reddit" />
      <button className="search-button">🔍</button>
      <select>
        <option value="">Sort</option>
        <option value="best">Best</option>
        <option value="hot">Hot</option>
        <option value="new">New</option>
        <option value="top">Top</option>
      </select>
    </form>
  );
}
