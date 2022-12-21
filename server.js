const roomsRoute = require("./routes/roomsRoute");
const studentsRoute = require("./routes/studentsRoute");
const express = require("express");
const app = express();
const dbConfig = require("./db");
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server listening" + port));
app.use("/api/rooms", roomsRoute);
app.use("/api/students", studentsRoute);
