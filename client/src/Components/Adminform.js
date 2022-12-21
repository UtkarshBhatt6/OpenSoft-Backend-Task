import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import { Link } from "react-router-dom";
function Adminform() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Admin Name</Form.Label>
        <Form.Control type="name" placeholder="Enter username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary">
        <Link to="/Allotroom">Enter</Link>
      </Button>
    </Form>
  );
}

export default Adminform;
