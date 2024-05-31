


const express = require("express")
const aboutRoutes = express.Router()

const controller = require("../../controller/frontend_controller/aboutus_controller")


aboutRoutes.get("/", controller.renderAboutus)

module.exports = aboutRoutes;