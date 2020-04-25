var mongoose=require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const passport = require("passport");
//user schema




var userSchema=new mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },
    
    username:{
        type:String,
        required:true
    },
    companyname:{
        type:String,
        required:true
    },
    adlayout:{
        type:String,
        required:true
    },
    theme:{
        type:String,
        required:true
    },
    targetaudience:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
        
    },
    

    
});
userSchema.plugin(passportLocalMongoose);


const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
module.exports=User;
