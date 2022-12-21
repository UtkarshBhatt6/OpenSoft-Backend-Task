import React from "react";
import Card from "react-bootstrap/Card";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "@coreui/react";
// import "@coreui/coreui/dist/css/coreui.min.css";
import { CCardBody, CCardTitle, CCardText, CCard } from "@coreui/react";
function StudentCard() {
  return (
    <div>
      <CCard className="mb-3">
        {/* <CCardImage orientation="top" src="/images/react.jpg" /> */}
        <CCardBody>
          <CCardTitle>Name:</CCardTitle>
          <CCardTitle>Roll Number</CCardTitle>
          <CCardTitle>Contact Number</CCardTitle>
          <CCardTitle>Email ID</CCardTitle>
          <CCardTitle>Block Number</CCardTitle>
          <CCardTitle>Room Number</CCardTitle>
          <CCardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CCardText>
          <CCardText>
            <small className="text-medium-emphasis">
              Last updated 3 mins ago
            </small>
          </CCardText>
        </CCardBody>
      </CCard>
    </div>
  );
}

export default StudentCard;
