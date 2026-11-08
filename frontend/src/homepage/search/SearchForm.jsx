import React from "react";
import CultureFilter from "./filters/CultureFilter";
import LocationFilter from "./filters/LocationFilter";
import EventTypeFilter from "./filters/EventTypeFilter";

export default function SearchForm() {
  return (
    <div className="search-form-container">
      <CultureFilter />
      <LocationFilter />
      <EventTypeFilter />
    </div>
  );
}
