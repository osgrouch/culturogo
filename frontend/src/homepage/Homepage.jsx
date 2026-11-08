import React from "react";import SearchForm from "./search/SearchForm";
import Logo from "./Logo";

export default function Homepage({ highlight }) {
  return (
    <div class="homepage-container">
      <Logo />
      <Highlight info={highlight} />
      <Search />
    </div>
  );
}
