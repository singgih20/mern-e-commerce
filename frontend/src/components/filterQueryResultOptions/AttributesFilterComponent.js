import React from "react";
import { Form } from "react-bootstrap";

export default function AttributesFilterComponent() {
  return (
    <>
      {
        [{ color: ["red", "blue", "green"]}, { ram: ["1 TB", "2 TB"]}].map((item, idx) => {
          return (
            <div key={idx} className="mb-3">
              <Form.Label><b>{Object.keys(item)}</b></Form.Label>
              {
                item[Object.keys(item)].map((i, index) => {
                  return (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      id="default-checkbox"
                      label={i}
                    />
                  )
                })
              }
            </div>
          )
        })
      }
    </>
  )
}
