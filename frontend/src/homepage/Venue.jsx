import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Venue({ info }) {
  // no data to display
  if (!info) {
    return null;
  }

  return (
    <Card>
      <Card.Text>{info.title}</Card.Text>
      {info.description && <Card.Text>{info.description}</Card.Text>}
      {info.start && <Card.Text>{info.start}</Card.Text>}
      {info.end && <Card.Text>{info.end}</Card.Text>}
      {info.address && <Card.Text>{info.address}</Card.Text>}
      {info.link && <Card.Text>{info.link}</Card.Text>}
      <a href='.'></a>
    </Card>
  )
}
