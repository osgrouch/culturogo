import React from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

export default function Search() {
  return (
    // TODO: needs to render with smaller/compact view if search results are being displayed
    <div class="search-container">
      <SearchForm />
      <SearchResults />
    </div>
  );
}
