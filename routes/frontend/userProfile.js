

const express = require('express');
const userProfileRoutes = express.Router();

const controller = require("../../controller/frontend_controller/userProfile_Controller")

userProfileRoutes.get("/", controller.userProfile)


module.exports = userProfileRoutes;