import React from "react";
import Button from "react-bootstrap/esm/Button";
// import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// import RoomCard from "../Components/RoomCard";
function Allotroom() {
  const [rooms, setrooms] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/rooms/getallrooms")
      .then((response) => {
        setrooms(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <form>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Block Number</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>E</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Room Number</label>
          <select class="form-control" id="exampleFormControlSelect1">
            {rooms.map((item) => {
              return <option>{item.room_number}</option>;
            })}
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Roll Number</label>

          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
          </select>
        </div>
      </form>
      <Button variant="primary">Allot</Button>
    </div>
  );
}

export default Allotroom;
