const mongoose =require("mongoose");
var mongoURL= "mongodb+srv://utkarsh:bhatt@cluster0.oesmkue.mongodb.net/RK_ROOMS"
mongoose.connect(mongoURL ,{useUnifiedtopology: true, useNewUrlParser: true})
var connection =mongoose.connection;
connection.on("error", ()=>{
    console.log("Connection Failed");
})
connection.on("connected", ()=>{
    console.log("connection with MongoDB successful");
})

module.exports=mongoose