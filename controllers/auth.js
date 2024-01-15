const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const userModel = require('../models/users')

const secret_key = process.env.JWT_TOKEN
const saltRounds = 10

//register
const register = (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const hashedPassword = bcrypt.hashSync(password, saltRounds)

  const user = {
    username,
    password: hashedPassword
  }

  userModel.push(user)

  res.status(201).send("Succes add data")

}

const login = (req, res) => {
  // const user = {username: "Kayla", password: "12345"}
  
  const username = req.body.username
  const password = req.body.password

  // console.log(username)

  // Create a JWT token with user infromation
  const token = jwt.sign(user, secret_key)

  // Send the token to the user
  res.json({ token })
}

module.exports = {
  login,
  register
}