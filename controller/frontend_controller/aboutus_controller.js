


const renderAboutus = async (req, res)=>{
    return res.render('frontend_views/aboutus', { 
        title: "About us",
        favicon: "/static/images/logo.png",
     layout: "frontend", 
    // product: groupProduct 
})
}



module.exports = {
   renderAboutus
}