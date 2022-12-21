import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import RoomCard from "../Components/RoomCard";
export default function BookRoomscreen() {
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
      {/* <h1>Book Room Screen</h1> */}
      <h1>Number of Rooms : {rooms.length} </h1>
      <div align="center">
        {/* <RoomCard /> */}
        {rooms.map((item) => {
          return (
            <RoomCard
              id={item.id}
              allotment={item.allotment}
              book_number={item.book_number}
              room_number={item.room_number}
            />
          );
        })}
      </div>
    </div>
  );
}
