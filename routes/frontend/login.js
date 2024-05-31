



const express = require('express')
const loginRoutes = express.Router()

const controller = require("../../controller/frontend_controller/login_controller")


loginRoutes.get("/", controller.renderLogin)
loginRoutes.post("/", controller.loginUser)

module.exports = loginRoutes