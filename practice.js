const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
app.listen(port, () => console.log("server listening :" + port));
app.get("/", (req, res) => {
  res.send("Hi,this is my simple route");
});
