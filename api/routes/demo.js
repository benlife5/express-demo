const express = require("express")
const router = express.Router()

router.get("/info", (req, res, next) => {
  console.log(req.query)
  res.send("API is working properly")
})

router.get("/post", (req, res, next) => {
  console.log(req.body)
  res.send("Received")
})

// http://localhost:9000/demo/info
// GET request

module.exports = router