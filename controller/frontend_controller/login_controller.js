


const signupModel = require("../../model/signup_model")


const renderLogin = async (req, res)=>{
    return res.render('frontend_views/login', { 
        title: "Login",
        favicon: "/static/images/logo.png",
        layout: "frontend", 
        isLoginPage: true
    // product: groupProduct 
})
}

const loginUser = async (req, res) => {
    try {
        // Check if the user is already authenticated
        const auth = req.session.auth;
        if (auth) {
            return res.redirect("/login");
        }

        const { email, password } = req.body;
        const data = await signupModel.userLogin(email, password);
        if (data) {
        
            req.session.auth = {
                id: data.id,
                role: "user"
            };
            
            return res.redirect("/userProfile");
        } else {
            
            return res.redirect("/login");
        }
    } catch (error) {
        console.log(error);
        // Handle error appropriately
        return res.status(500).send("Internal Server Error");
    }
}



module.exports = {
   renderLogin,
   loginUser
}