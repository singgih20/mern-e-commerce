import React from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { AttributesFilterComponent, CategoryFilterComponent, PaginationComponent, PriceFilterComponent, ProductForListComponent, RatingFilterComponent, SortOptionsComponent } from "../components";

export default function ProductListPage() {
  return (
    <Container>
      <Row>
        <Col md={3} style={{backgroundColor: 'red'}}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <SortOptionsComponent />
            </ListGroup.Item>
            <ListGroup.Item>
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
        <Col md={9} style={{backgroundColor: 'yellow'}}>
          <ProductForListComponent />
          <PaginationComponent />
        </Col>
      </Row>
    </Container>
  )
}
