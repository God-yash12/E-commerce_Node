

const { user } = require("../../connection/config");
const signupModel = require("../../model/signup_model")
const mailService = require("../../nodemailer/sendmail")


const renderSignupForm = async (req, res)=>{ 
    return res.render('frontend_views/signup', { 
    layout: "frontend",
    title: "Sign Up Form",
    favicon: "/static/images/logo.png",
    isSignupPage: true
})
}



const insertNewUsers = async (req, res) => {
    try {
        const body = req.body;
        const email = req.body.email
        const userdata = await signupModel.insertNewUser(body);
        console.log(userdata)
        if (userdata) {
            await mailService.sendMailToUser(email);
            req.session.auth = {
                id: userdata.insertId,
                role: "user"
            }
            return res.redirect("/userProfile");
        }
        return res.redirect("/signup");
    } catch (error) {
        console.log(error);
        // Handle error appropriately
        res.status(500).send("Internal Server Error");
    }
}








module.exports = {
    renderSignupForm,
    insertNewUsers
}