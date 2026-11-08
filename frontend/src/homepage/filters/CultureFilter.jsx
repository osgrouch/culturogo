import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import cultures from "../../data/cultures.json";

export default function CultureFilter({ selectedCulture, setSelectedCulture }) {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedCulture}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {cultures.map((culture) => (
            <Dropdown.Item
              key={culture.id}
              onClick={() => setSelectedCulture(culture.name)}
            >
              {culture.flag} {culture.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
