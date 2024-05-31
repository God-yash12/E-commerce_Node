


const userProfile = async (req, res) => {
    try {
        const auth = req.session.auth;
        if (!auth) {
            return res.redirect("/login");
        }
        return res.render('frontend_views/userProfile', {
            layout: "frontend",
            title: "User Profile",
            favicon: "/static/images/logo.png",
            isUserProfile: true
        });
    } catch (error) {
        console.log(error);
        // Handle error appropriately
        res.status(500).send("Internal Server Error");
    }
}


module.exports = {
    userProfile
}