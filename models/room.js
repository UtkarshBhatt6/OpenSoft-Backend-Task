const mongoose =require("mongoose");
const roomSchema =mongoose.Schema({
    book_number :{
        type:String,
        required: true,
    },
    room_number :{
        type:Number,
        required: true,
    },
    availability :{
        type:String,
        required: true,
    }
} , {
    timestamps: true,
})
const roomModel =mongoose.model('rooms',roomSchema);
module.exports =roomModel;
