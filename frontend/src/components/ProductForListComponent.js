import React from "react";
import { Card } from "react-bootstrap";

export default function ProductForListComponent() {
  return (
    <Card style={{width: "18rem"}}>
        <Card.Body>
            <Card.Img variant="top" src="/images/tablets-category.png" />
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text bo uild on the card title and make up the bulk of the card's content
            </Card.Text>
        </Card.Body>
    </Card>
  )
}
