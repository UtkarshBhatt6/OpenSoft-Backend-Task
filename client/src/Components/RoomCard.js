// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { useState } from "react";
function RoomCard(Item) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        {/* <img src={Item.img} className='card-img-top img-fluid'/> */}
        <div className="card-body text-center">
          <h5 className="card-title">
            <b>Floor Number: {Item.book_number}</b>
          </h5>
          <h5 className="card-title">
            <b>Room Number: {Item.room_number}</b>
          </h5>
          <p className="card-text">
            Allotment: &nbsp;
            <Button className="btn btn-success" onClick={handleShow}>
              {Item.allotment}
            </Button>
          </p>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Student Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Modal.Title>Name</Modal.Title>
              <Modal.Title>Roll Number</Modal.Title>
              <Modal.Title>Contact Number</Modal.Title>
              <Modal.Title>Email Id</Modal.Title>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
              {/* <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button> */}
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
