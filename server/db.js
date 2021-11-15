const mongoose = require("mongoose");

// const mongoURL = "mongodb://localhost:27017/glocity";
const mongoURL = "";

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true});

const connection = mongoose.connection;

connection.on("error",()=>{
    console.log("some err occured while connecting to db"); 
})


connection.on("connected", () => {
  console.log("db connected successfully");
});

module.exports = mongoose;
