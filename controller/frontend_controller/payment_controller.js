



const renderPaymentMode = async (req, res)=>{
    return res.render('frontend_views/paymentMode', { 
        title: "payment Mode Details",
        favicon: "/static/images/logo.png",
     layout: "frontend", 
    // product: groupProduct 
})
}



module.exports = {
    renderPaymentMode
}