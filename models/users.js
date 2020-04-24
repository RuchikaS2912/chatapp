var mongoose=require('mongoose');

//user schema
var userSchema=mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },
    
    email:{
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
    
    
    password:{
        type:String,
        required:true
    }
    
});

var User=module.exports=mongoose.model("User",userSchema);
