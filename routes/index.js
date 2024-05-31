const express = require('express')

const routes = express.Router();
const controller = require('../controller/index_controller')


routes.get('/', controller.indexController)


module.exports =  routes;
