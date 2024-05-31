const express = require('express')
const expressHbs = require('express-handlebars')
const bodyParser = require('body-parser')
const multer = require ('multer')
const adminRoutes = require('./routes/admin_routes')
const frontendRoutes = require('./routes/frontend/index')
const fs = require ('fs')
const app = express();
const flash = require('connect-flash')
const session = require('express-session')
const helpers = require('./helper/helpers')

const MySQLStore = require('express-mysql-session')(session);

const dbconfig = require("./connection/config");



const hbs = expressHbs.create({
    extname: ".hbs",
    defaultLayout: "main.hbs",
    layoutsDir: "views/layout",
    helpers: helpers
   
})
const sessionStore = new MySQLStore(dbconfig)

//setup session middlewares
app.use(session({
    secret: "ganesh12",
    saveUninitialized: true,
    resave: false,
    store: sessionStore,
    cookie: ({
        maxAge: 300000.
        
    })
}));


app.use(flash())

app.engine("hbs", hbs.engine)
app.set("view engine", "hbs")

app.use("/static", express.static(__dirname + '/public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))




//routes

app.use('/admin', adminRoutes)
app.use('/', frontendRoutes)


const port = process.env.port || 3000;
app.listen(port, (error)=>{
    if(error){
        return console.log(error)
    }else{
        console.log("listening")
        console.log(`http://localhost:${port}`)
    }
})