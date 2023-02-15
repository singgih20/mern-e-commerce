import React from "react";
import { ProductCarouselComponent, CategoryCardComponent } from '../components/'
import { Row, Container } from "react-bootstrap";
export default function HomePage() {
  const categories = [
    'Tablets',
    'Monitors',
    'Games',
    'Printers',
    'Software',
    'Camera',
    'Books',
    'Videos'
  ]
  return (
    <div>
      <ProductCarouselComponent />
      <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
          {
            categories.map((category, idx) => {
              return(
                <CategoryCardComponent category={category} idx={idx} key={idx} />
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}
