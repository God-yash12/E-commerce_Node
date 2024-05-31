
const productModel = require("../../model/product_model")
const groupByFour = require('../../helper/groupbyFour')



const renderShop = async (req, res)=>{
    const product = await productModel.getProduct()
    const groupProduct =  groupByFour(product)
    return res.render('frontend_views/shop', { layout: "frontend", product: groupProduct })
}



module.exports = {
    renderShop
}