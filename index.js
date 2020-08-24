const express = require("express")
const bodyParser = require("body-parser")
require("dotenv").config()
const app = express()

app.use(bodyParser.json())
const PORT = process.env.PORT || 4000

app.post("/mail", async (req, res) => {
  res.json("mail posted")
})

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
