import React, { useState } from "react";
import Logo from "./Logo";
import Highlight from "./Highlight";
import CultureFilter from "./filters/CultureFilter";
import LocationFilter from "./filters/LocationFilter";
import EventTypeFilter from "./filters/EventTypeFilter";
import Venue from "./Venue";

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

  // Call the /api/form endpoint with user query
  const handleSearchResults = async (event) => {
    event.preventDefault(); // don't reload the page
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          culture: selectedCulture == "Culture" ? "" : selectedCulture, // replace with your filter state
          location: selectedLocation == "Location" ? "" : selectedLocation,
          event: selectedEventType == "Event Type" ? "" : selectedEventType,
        }),
      });
      if (!response.ok) {
        setSearchResults([]);
        return;
      }
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  const [selectedCulture, setSelectedCulture] = useState("Culture");
  const [selectedLocation, setSelectedLocation] = useState("Location");
  const [selectedEventType, setSelectedEventType] = useState("Event Type");
  return (
    <div className="homepage-container vh-100 d-flex flex-column">
      <div
        className={
          "logo-highlight-form-container p-4 d-flex flex-column align-items-center justify-content-center " +
          (hasResultsToShow ? "compact" : "full")
        }
      >
        <Logo />
        <Highlight info={highlight} />
        <div className="search-form-container d-flex flex-md-row flex-column justify-content-center align-items-center m-2">
          <CultureFilter
            selectedCulture={selectedCulture}
            setSelectedCulture={setSelectedCulture}
          />
          <LocationFilter
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
          <EventTypeFilter
            selectedEventType={selectedEventType}
            setSelectedEventType={setSelectedEventType}
          />
          <button onClick={handleSearchResults}>GO!</button>
        </div>
      </div>
      {hasResultsToShow && (
        <div className="search-results-container d-flex flex-col overflow-auto p-4">
          {/* TODO: rework this data to be shown with a bootstrap card */}
          {searchResults.map((venue) => (
            <Venue key={venue.id} info={venue} />
          ))}
        </div>
      )}
    </div>
  );
}
