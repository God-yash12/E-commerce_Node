



const renderHome = async (req, res)=>{
    return res.render('frontend_views/home', { 
        title: "Home",
        favicon: "/static/images/logo.png",
     layout: "frontend", 
    // product: groupProduct 
})
}



module.exports = {
   renderHome
}