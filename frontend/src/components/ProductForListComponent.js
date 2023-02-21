import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Rating } from 'react-simple-star-rating'
export default function ProductForListComponent({images, idx}) {
  return (
    <Card style={{marginTop: "30px", marginBottom: "50px"}}>
      <Row>
        <Col lg={5}>
          <Card.Img variant="top" src={`/images/${images[idx]}-category.png`} />
        </Col>
        <Col lg={7}>
        <Card.Body>
            <Card.Title>Product Name Lorem ipsum dolor sit amet.</Card.Title>
            <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium necessitatibus fugit error asperiores officiis inventore alias libero perspiciatis similique maiores.
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={5} /> (1)
            </Card.Text>
            <Card.Text className="h4">
              $124{" "}
              <LinkContainer to="/product-detail">
                <Button variant="danger">See product</Button>
              </LinkContainer>
            </Card.Text>
        </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}
