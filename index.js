const express = require("express")
const bodyParser = require("body-parser")
const { check, validationResult } = require("express-validator")
const nodemailer = require("nodemailer")
require("dotenv").config()
const path = require("path")
const app = express()

app.use(bodyParser.json())
const PORT = process.env.PORT || 4000

app.post(
  "/post-email",
  [
    check("name", "Name must contain at least 3 characters!").isLength({
      min: 3,
    }),
    check("email", "Email is not correct!").isEmail(),
    check("message", "Message must contain at least 5 characters!").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { name, email, message } = req.body

      const output = `
        <h2>You have new contact message!</h2>
        <h4>Details message</h4>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
        </ul>
        <h4>Message</h4>
        <div>${message}</div>`

      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.USER,
          pass: process.env.PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      })

      await transporter.sendMail(
        {
          from: process.env.USER,
          to: "hai.vasyl20@gmail.com",
          subject: "Contacts request",
          text: "",
          html: output,
        },
        (error, info) => {
          if (error) {
            return res.status(400).json(`Error posting email: ${error}`)
          }
          res.json("Email posted!")
        }
      )
    } catch (error) {
      res.json(`Error posting email: ${error.message}`)
    }
  }
)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
