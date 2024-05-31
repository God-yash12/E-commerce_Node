const express = require('express')

const routes = express.Router();
const controller = require('../controller/category_controller');
const categoryValidation = require('../middleware/categoryValidation') 


//to get category 
routes.get('/', controller.categoryGetFormController)
routes.post('/', categoryValidation.categoryValidation, controller.addCategoryController)
routes.get('/list', controller.getCategoryList )
//the below line gives the update form from category.hbs 
routes.get('/:id', controller.getByIdCategory)
// this below line gives the updated data 
routes.post('/:id', controller.updateCategoryById)
routes.get('/:id', controller.deleteCategory)


module.exports = routes;
