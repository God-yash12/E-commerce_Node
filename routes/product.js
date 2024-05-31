const express = require('express');
const routes = express.Router();
const validateProductForm  = require('../middleware/validationProductForm')
const controller = require('../controller/product_controller');
const upload = require("../middleware/image_upload")

routes.get('/', controller.productGetFormController);
routes.post('/', upload.single('image'), validateProductForm.validationProductFrom, controller.addProductController)
// routes.get('/', controller.productListController)
routes.get('/list', controller.getProductList)
routes.get('/delete/:id', controller.deleteproductController)
routes.get('/edit/:id', controller.getProductById);
routes.post('/edit/:id', upload.single('image'), controller.updateProductByIdController);


module.exports = routes;
