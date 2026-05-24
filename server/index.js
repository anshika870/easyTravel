const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const schoolRoutes = require("./routes/schoolRoutes")


const app = express()

app.use(cors())
app.use(express.json())
app.use("/schools", schoolRoutes)



mongoose.connect("mongodb://127.0.0.1:27017/easytravel")
.then(() => {
  console.log("MongoDB Connected")
})
.catch((err) => {
  console.log(err)
})



app.get("/", (req, res) => {
  res.send("EasyTravel Backend Running")
})



app.listen(5000, () => {
  console.log("Server Running On Port 5000")
})