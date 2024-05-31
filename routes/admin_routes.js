

const express = require('express')
const adminRoutes = express.Router()
const categoryRoutes = require('./category')
const routes = require('./index')
const productRoutes = require('./product')




adminRoutes.use('/', routes)
adminRoutes.use('/category', categoryRoutes) 
adminRoutes.use('/product', productRoutes)


module.exports = adminRoutes;



