import React, { useState } from "react";
import Logo from "./Logo";
import Highlight from "./Highlight";
import CultureFilter from "./filters/CultureFilter";
import LocationFilter from "./filters/LocationFilter";
import EventTypeFilter from "./filters/EventTypeFilter";

function getTodaysHighlight() {
  // TODO: GET HTTPS request to highlight endpoint
  // return { culture: "American", title: "Thanksgiving" };
  return null;
}

export default function Homepage() {
  const [highlight] = useState(() => getTodaysHighlight());
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
          {/* TODO: need a form and submit button */}
        </div>
      </div>
      <div className="search-results-container">
        This is where search results will be shown.
      </div>
    </div>
  );
}
