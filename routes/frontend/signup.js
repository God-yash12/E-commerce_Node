



const express = require('express')
const signupRoutes = express.Router()
const controller = require("../../controller/frontend_controller/signup_controller")

signupRoutes.get('/', controller.renderSignupForm)
signupRoutes.post("/", controller.insertNewUsers)


module.exports = signupRoutes;