import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import locations from '../../data/locations.json';
import { useState } from 'react';

export default function LocationFilter({  }) {
    const [selectedLocation, setSelectedLocation] = useState("Location");
    return <div>
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
      </div>;
}
