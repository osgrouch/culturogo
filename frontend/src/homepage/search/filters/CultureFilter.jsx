import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import cultures from '../../../data/cultures.json';

export default function CultureFilter({  }) {
  return <div>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Culture
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {cultures.map((culture) => (
  <Dropdown.Item key={culture.id}>
    {culture.flag} {culture.name}
  </Dropdown.Item>
))}
      </Dropdown.Menu>
    </Dropdown>
  </div>;
}
