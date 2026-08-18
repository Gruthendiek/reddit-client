import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setSearchTerm as setReduxSearchTerm,
  setSort,
} from "../../features/posts/postsSlice.js";
import "./FeedControls.css";

export default function FeedControls() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(setReduxSearchTerm(searchTerm));
  }
  return (
    <form className="feed-search" onSubmit={handleSubmit}>
      <label htmlFor="searchInput">Search posts</label>
      <input
        type="text"
        id="searchInput"
        placeholder="Search Reddit"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button type="submit" className="search-button">
        🔍
      </button>
      <select onChange={(event) => dispatch(setSort(event.target.value))}>
        <option value="best">Best</option>
        <option value="hot">Hot</option>
        <option value="new">New</option>
        <option value="top">Top</option>
      </select>
    </form>
  );
}
