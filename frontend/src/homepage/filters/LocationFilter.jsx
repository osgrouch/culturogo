import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import locations from "../../data/locations.json";

export default function LocationFilter({
  selectedLocation,
  setSelectedLocation,
}) {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedLocation}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {locations.map((location) => (
            <Dropdown.Item
              key={location.id}
              onClick={() => setSelectedLocation(location.name)}
            >
              {location.name} {location.state}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
