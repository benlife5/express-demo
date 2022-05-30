const express = require("express")
const router = express.Router()
const db = require("./firebase")

const {getDocs, collection} = require("firebase/firestore")

router.get("/info", async (req, res, next) => {
  console.log(req.query)
  const docs = await getDocs(collection(db, "responses"))
  console.log(docs)
  res.send("API is working properly")
})

router.post("/post", (req, res, next) => {
  console.log(req.body)
  res.send("Received")
})

module.exports = router
