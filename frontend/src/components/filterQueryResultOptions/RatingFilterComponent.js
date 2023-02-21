import React from "react";
import { Form } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

export default function RatingFilterComponent() {
  return (
    <>
      <span className="fw-bold">Rating</span>
      {
        Array.from({length: 5}).map((_, idx) => {
          return (
            <Form.Check type="checkbox" id={`check-api-`}>
              <Form.Check.Input type="checkbox" isValid />
              <Form.Check.Label style={{cursor: "pointer"}}>
              <Rating readonly size={20} initialValue={idx + 1} />
              </Form.Check.Label>
            </Form.Check>
          )
        })
      }
    </>
  )
}
