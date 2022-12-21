import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

function Register(props) {
  const { userName, setuserName } = useState("");
  const { password, setpassword } = useState("");
  //   const { email, setemail } = useState("");
  //   const { cont, setemail } = useState("");
  //   const { email, setemail } = useState("");
  //   const { email, setemail } = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("its working");
  };
  return (
    <>
      <Form onSubmit={handleSubmit} action="/register" method="POST">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter username"
            value={userName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter username"
            value={userName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter username"
            value={userName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enter
        </Button>
      </Form>
      <Button
        variant="primary"
        padding="20px"
        onClick={() => props.onFormSwitch("login")}
      >
        Already have an account ? Login here.
      </Button>
    </>
  );
}

export default Register;
