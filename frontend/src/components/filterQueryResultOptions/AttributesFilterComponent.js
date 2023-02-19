import React from "react";
import { Form } from "react-bootstrap";

export default function AttributesFilterComponent() {
  return (
    <>
      <Form.Label>Color</Form.Label>
      <Form.Check
        type="checkbox"
        id="default-checkbox"
        label="green"
      />
    </>
  )
}
