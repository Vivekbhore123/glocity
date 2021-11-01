const express = require("express");
const app = express();
const dbConfig = require("./db")

const userRoute = require("./routes/userRoute");
app.use(express.json());

app.get("/",(req,res)=>{
  res.send("hello from backend (testroute)");
})

app.use("/api/users",userRoute);


app.listen(5000,()=>{
    console.log("listening on 5000");
})