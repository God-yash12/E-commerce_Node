


const { check } = require('express-validator')


const categoryValidation  =[
    check('category_name')
    .notEmpty().withMessage("category is required")
   
];


module.exports = {
    categoryValidation,
}