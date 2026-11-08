import React from "react";

export default function Highlight({ info }) {
  // if no info was given (null or undefined) don't render this component
  if (!info) {
    return null;
  }

  return (
    <p>
      Today is {info.title} in {info.culture} culture.
    </p>
  );
}
