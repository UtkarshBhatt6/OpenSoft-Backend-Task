import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
function LoginPage() {
  return (
    <div>
      LOGIN
      <div className="enter-option">
        <Card style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title>Login As</Card.Title>
            <Card.Link href="/adminLogin">
              <Button variant="primary">Admin</Button>
            </Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title>Login As</Card.Title>

            <Card.Link href="/studentLogin">
              <Button variant="primary">Student</Button>
            </Card.Link>
          </Card.Body>
        </Card>
        {/*
         */}
      </div>
    </div>
  );
}

export default LoginPage;
