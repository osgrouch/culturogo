import React, { useState } from "react";
import Logo from "./Logo";
import Highlight from "./Highlight";
import CultureFilter from "./filters/CultureFilter";
import LocationFilter from "./filters/LocationFilter";
import EventTypeFilter from "./filters/EventTypeFilter";

function getTodaysHighlight() {
  // TODO: GET HTTPS request to highlight endpoint
  return { culture: "American", title: "Thanksgiving" };
}

// dummy venues for testing search results funcationality
const venues = [
  { id: 1, title: "venue1", address: "123 Jefferson Rd, Rochester, NY 14623" },
  { id: 2, title: "venue2", address: "456 Jefferson Rd, Rochester, NY 14623" },
  { id: 3, title: "venue3", address: "789 Jefferson Rd, Rochester, NY 14623" },
];

export default function Homepage() {
  const [highlight] = useState(() => getTodaysHighlight());
  const [searchResults, setSearchResults] = useState([]);
  const hasResultsToShow = searchResults.length > 0;

  const handleSearchResults = (event) => {
    // TODO: POST HTTPS request to send filters to backend and begin search
    event.preventDefault(); // don't reload the page
    // dummy value that toggle displays the result
    const result = searchResults.length > 0 ? [] : venues;
    setSearchResults(result);
  };

  return (
    <div className="homepage-container">
      <div className="logo-highlight-form-container">
        <Logo />
        <Highlight info={highlight} />
        {/* TODO: needs to render with smaller/compact view if search results are being displayed */}
        <div className="search-form-container">
          <CultureFilter />
          <LocationFilter />
          <EventTypeFilter />
          <button onClick={handleSearchResults}>GO!</button>
        </div>
      </div>
      {hasResultsToShow && (
        <div className="search-results-container">
          {/* TODO: rework this data to be shown with a bootstrap card */}
          {searchResults.map((venue) => (
            <p key={venue.id}>
              {venue.title} @ {venue.address}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
