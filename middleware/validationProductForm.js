

const { body, validationresult } = require('express-validator')

const validationProductFrom = [
    body('productName').notEmpty().withMessage('Product Name is Required'),
    body('price').notEmpty().withMessage('price is required').isNumeric('Price should be number'),
    body('description').notEmpty().withMessage('description is required'),
    body('category_id').notEmpty().withMessage('category name is required'), 
   
]


module.exports = {
    validationProductFrom, 
}