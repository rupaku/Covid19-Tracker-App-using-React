//import dependencies
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

//app config
const app = express()
const port = 9000

//middlewares
app.use(express.json())
app.use(cors())

//api routes
app.get("/", (req, res) => {
  res.status(200).send("hello world")
})

app.post("/api/v1/calculatetip", (req, res) => {
  const amount = parseInt(req.body.amount)
  const tip = parseInt(req.body.tip)

  const toBePaid = amount + (tip / 100) * amount

  res.status(200).json({ toBePaid })
})
//listener
app.listen(port, () => console.log(`Listening on localhost ${port}`))
