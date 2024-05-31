





const express = require('express')
const termsRoutes = express.Router()


const controller = require("../../controller/frontend_controller/terms_controller")


termsRoutes.get("/", controller.renderTermsAndConditions)


module.exports = termsRoutes