import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function Homescreen() {
  const [rooms, setrooms] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/rooms/getallrooms")
      .then((response) => {
        setrooms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <h1>Home Screen</h1>
      <h1>there are {rooms.length} rooms</h1>
    </div>
  );
}

export default Homescreen;
