

const express = require('express')
const shopRoutes = express.Router()
const controller = require('../../controller/frontend_controller/shops_controller')

shopRoutes.get('/', controller.renderShop)


module.exports =shopRoutes