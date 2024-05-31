

const express = require('express')
const paymentRoutes  = express.Router()

const Controller = require("../../controller/frontend_controller/payment_controller")

paymentRoutes.get("/", Controller.renderPaymentMode)


module.exports = paymentRoutes;