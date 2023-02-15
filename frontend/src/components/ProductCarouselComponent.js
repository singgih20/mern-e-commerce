import React from "react";

import Carousel from 'react-bootstrap/Carousel';
import { LinkContainer } from "react-router-bootstrap";

function ProductCarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-1.png"
          alt="First slide"
          style={{height: "300px", objectFit: "cover"}}
        />
        <Carousel.Caption>
          <LinkContainer style={{cursor: "pointer"}} to ="/product-detail">
            <h3>Bestseller in Laptops Category</h3>
          </LinkContainer>
          <p>Dell Inspiron 15 3000 Laptop, 15.6 inch HD</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-2.png"
          alt="Second slide"
          style={{height: "300px", objectFit: "cover"}}
        />

        <Carousel.Caption>
          <LinkContainer style={{cursor: "pointer"}} to ="/product-detail">
            <h3>Bestseller in Book Category</h3>
          </LinkContainer>
          <p>World of Eric Carle, Hear Bear Roar 30-Button Animal Sound Book</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-3.png"
          alt="Third slide"
          style={{height: "300px", objectFit: "cover"}}
        />

        <Carousel.Caption>
          <LinkContainer style={{cursor: "pointer"}} to ="/product-detail">
            <h3>Bestseller in Camera Category</h3>
          </LinkContainer>
          <p>4k Camcorder Video Camera 60FPS 48MP Vlogging Camera for YouTube WiFi 16X Digital Camera</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarouselComponent;
