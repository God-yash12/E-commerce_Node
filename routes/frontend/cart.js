


const express = require('express')
const cartRoutes  = express.Router()
const controller = require("../../controller/frontend_controller/cart_controller")
 

cartRoutes.get('/', controller.getCart)
cartRoutes.get("/add/:id", controller.addNewItem)
cartRoutes.get('/plus/:id', controller.IncreamentItem)
cartRoutes.get('/decreament/:id', controller.decreamentItem)
// cartRoutes.get('/delete/:id', controller.deleteCartItem)


module.exports = cartRoutes
