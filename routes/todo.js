const express = require("express")

const userController = require('../controllers/user')
const authController = require('../middleware/auth')
// const auth = require("./auth")

// express.Router() fungsinya ngebantu kita supaya routernya dibuat sesuai kategori
const user = express.Router()

user.get('/see-profile', authMiddleware.verifyToken, userController.getUsername)

module.exports = user