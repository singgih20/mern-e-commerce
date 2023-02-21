import React from "react";
import { Form } from "react-bootstrap";

export default function CategoryFilterComponent() {
  return (
    <>
        <span className="fw-bold">Category</span>
        <Form>
            {
                Array.from({length: 5}).map((_, idx) => {
                    return (
                        <div key={idx} className="mb-3">
                            <Form.Check type="checkbox" id={`check-api-${idx}`}>
                                <Form.Check.Input type="checkbox" isValid />
                                <Form.Check.Label style={{cursor: 'pointer'}}>{`Category - ${idx}`}</Form.Check.Label>
                            </Form.Check>
                        </div>
                    )
                })
            }
        </Form>
    </>
  )
}
