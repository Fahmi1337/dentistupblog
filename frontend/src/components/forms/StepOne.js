import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData} className="form my-1">
            <Form.Group className="mb-3">
              <Form.Label>Patient Reference</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="patientReference"
                defaultValue={values.patientReference}
                type="text"
                placeholder="Patient #4561"
                onChange={handleFormData("patientReference")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date of birth</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="dateOfBirth"
                defaultValue={values.dateOfBirth}
                type="date"
                placeholder="Date of birth"
                onChange={handleFormData("dateOfBirth")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Male</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="gender"
                defaultValue={values.gender}
                type="radio"
                onChange={handleFormData("gender")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Female</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="gender"
                defaultValue={values.gender}
                type="radio"
                onChange={handleFormData("gender")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;
