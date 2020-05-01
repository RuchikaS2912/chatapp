var mongoose=require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const passport = require("passport");
//user schema




var adminSchema=new mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },
    
    username:{
        type:String,
        required:true
    },
    resetPasswordToken:{
        type:String
    },
    resetPasswordExpires:{
        type:Date
    } 
    
});
adminSchema.plugin(passportLocalMongoose);


const Admin = new mongoose.model("Admin", adminSchema);

passport.use(Admin.createStrategy());
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());
module.exports=Admin;