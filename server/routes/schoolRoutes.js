const express = require("express")
const router = express.Router()

const School = require("../models/School")



router.post("/add", async (req, res) => {

  try {

    const school = new School(req.body)

    await school.save()

    res.json({
      message: "School Added"
    })

  } catch (error) {

    res.status(500).json(error)

  }

})



router.get("/", async (req, res) => {

  try {

    const schools = await School.find()

    res.json(schools)

  } catch (error) {

    res.status(500).json(error)

  }

})



module.exports = router