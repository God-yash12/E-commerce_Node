


const renderTermsAndConditions = async (req, res)=>{
    return res.render('frontend_views/terms', { 
        title: "Terms and Conditions",
        favicon: "/static/images/logo.png",
     layout: "frontend", 
    // product: groupProduct 
})
}



module.exports = {
   renderTermsAndConditions
}