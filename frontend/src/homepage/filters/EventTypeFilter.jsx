import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import eventtype from '../../data/eventtype.json';
import { useState } from 'react';

export default function EventTypeFilter({  }) {
      const [selectedEventType, setSelectedEventType] = useState("Event Type");
      return <div>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selectedEventType}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {eventtype.map((eventtype) => (
          <Dropdown.Item 
          key={eventtype.id}
                onClick={() => setSelectedEventType(eventtype.name)}
          >
          {eventtype.name}
          </Dropdown.Item>
))}
      </Dropdown.Menu>
    </Dropdown>
  </div>;
}
