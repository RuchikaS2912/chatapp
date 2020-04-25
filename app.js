const express = require('express')
const app = express();
const path=require('path');
const flash = require('connect-flash');
const mongoose=require('mongoose');
var config=require('./config/database');
const bodyparser=require("body-parser");

const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

mongoose.Promise=global.Promise;


//connect mongodb
mongoose.connect(config.database,{useNewUrlParser:true,useUnifiedTopology: true});


app.use(flash());
app.use(session({
    secret: "LetsMakeItHappen",         //Later to be made an environment variable
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());
mongoose.set("useCreateIndex", true);

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});










app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.set('views', path.join(__dirname, 'views'));
app.use(bodyparser.urlencoded({ extended: true }));


const index=require('./routes/index.js');

app.use('/',index);











app.listen(4100,(req,res)=>{
    console.log('server started at 4100');
})