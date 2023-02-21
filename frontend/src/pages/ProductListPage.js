import React from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { AttributesFilterComponent, CategoryFilterComponent, PaginationComponent, PriceFilterComponent, ProductForListComponent, RatingFilterComponent, SortOptionsComponent } from "../components";

export default function ProductListPage() {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item className="mb-3 mt-3">
              <SortOptionsComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              FILTER: <br />
              <PriceFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <CategoryFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <AttributesFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>

            </ListGroup.Item>
            <ListGroup.Item>
              <Button variant="primary">Primary</Button>
              <Button variant="danger">Danger</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          {Array.from({length: 5}).map((_, idx) => {   
            return (
              <ProductForListComponent key={idx} idx={idx} images={["games", "monitors", "tablets", "games", "monitors"]} />
            )
          })}
          <PaginationComponent />
        </Col>
      </Row>
    </Container>
  )
}
