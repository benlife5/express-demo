const express = require("express")
const router = express.Router()
const db = require("./firebase")

const {getDocs, collection} = require("firebase/firestore")

router.get("/info", async (req, res, next) => {
  const allDocData = []
  // console.log(req.query)  // shows the URL params (stuff after the ? in the URL)
  const docs = await getDocs(collection(db, "responses"))
  docs.forEach((doc) => allDocData.push(doc.data()))
  res.json({result: allDocData})
})

router.get("/info/:id", async (req, res, next) => {
  console.log(req.params)  // shows the path params (stuff after /info/)
  res.sendStatus(200)  // say OK without sending data back
})

router.post("/post", (req, res, next) => {
  console.log(req.body)
  res.send("Received")
})

module.exports = router
