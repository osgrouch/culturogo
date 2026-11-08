import React from "react";
import Logo from "./Logo";
import Highlight from "./Highlight";
import Search from "./search/Search";

export default function Homepage({ highlight }) {
  return (
    <div className="homepage-container">
      <Logo />
      <Highlight info={highlight} />
      <Search />
    </div>
  );
}
