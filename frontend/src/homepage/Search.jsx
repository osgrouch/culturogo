import React from "react";
import CultureFilter from "./filters/CultureFilter";

export default function Search({ highlight }) {
  // 3 dropdown components
  // will be prepopulated with today highlight culture and location

  return (
    // top-down: logo, today highlight, the 3 filters
    // TODO: needs to render with smaller/compact view if search results are being displayed
    <div class="search-container">
      <CultureFilter />
      <div className={bool ? "normal" : "compact"}></div>
      <h2>This is the search component!</h2>
      <p>Today's Highlight Title: {highlight.title}</p>
      <p>Today's Highlight Culture: {highlight.culture}</p>
    </div>
  );
}
