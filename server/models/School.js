const mongoose = require("mongoose")

const vehicleSchema = new mongoose.Schema({

  name: String,

  seats: Number,

  price: String

})



const schoolSchema = new mongoose.Schema({

  schoolName: String,

  city: String,

  state: String,

  address: String,

  image: String,

  vehicles: [vehicleSchema]

})



module.exports = mongoose.model("School", schoolSchema)