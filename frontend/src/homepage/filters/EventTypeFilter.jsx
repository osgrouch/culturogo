import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import eventtype from '../../data/eventtype.json';

export default function EventTypeFilter({  }) {
      return <div>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Event Type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {eventtype.map((eventtype) => (
  <Dropdown.Item key={eventtype.id}>
    {eventtype.name}
  </Dropdown.Item>
))}
      </Dropdown.Menu>
    </Dropdown>
  </div>;
}
