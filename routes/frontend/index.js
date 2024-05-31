

const express = require('express')
const frontendRoutes = express.Router()
const homeRoutes = require('./home')
const cartRoutes = require('./cart')
const signupRoutes = require('./signup')
const shopRoutes = require('./shops')
const aboutRoutes = require("./about")
const paymentRoutes = require("./payment")
const termsRoutes = require("./term")
const loginRoutes = require("./login")
const userRoutes = require("./userProfile")
const { userProfile } = require('../../controller/frontend_controller/userProfile_Controller')




frontendRoutes.use('/',  homeRoutes)
frontendRoutes.use('/shops', shopRoutes)
frontendRoutes.use('/cart', cartRoutes)
frontendRoutes.use('/signup', signupRoutes)
frontendRoutes.use("/aboutus", aboutRoutes)
frontendRoutes.use("/paymentMode", paymentRoutes)
frontendRoutes.use("/terms", termsRoutes)
frontendRoutes.use("/login", loginRoutes)
frontendRoutes.use("/userProfile", userRoutes)


module.exports = frontendRoutes;