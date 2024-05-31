







const express = require('express')
const homeRoutes = express.Router()
const controller = require('../../controller/frontend_controller/home')


homeRoutes.get('/', controller.renderHome)


module.exports = homeRoutes;
