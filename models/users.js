var mongoose=require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const passport = require("passport");

//user schema
const post={
    heading:{
        type:String,
        
    },
    subheading:{
       type:String
       
    },
    
    descp:{
        type:String,
        
    },
    
    date:{
        type:Date,
        default:Date.now()
    },
    time:{
        type:Date,
        default:Date.now()
    },
    
    cost:{
        type:String
    
    }
    
}
 


var userSchema=new mongoose.Schema({
   
    adds:{
        type:[post]
    },

    name:{
        type:String,
        
    },
    
    username:{
        type:String,
       
    },
    companyname:{
        type:String,
        
    },
    adlayout:{
        type:String,

    },
    theme:{
        type:String,
       
    },
    targetaudience:{
        type:String,
        
    },
    date:{
        type:Date,
        default:Date.now()
        
    },
    resetPasswordToken:{
        type:String
    },
    resetPasswordExpires:{
        type:Date
    } ,

   
    
});
userSchema.plugin(passportLocalMongoose);


const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
module.exports=User;
