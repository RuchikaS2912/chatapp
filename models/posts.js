const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const postitemSchema= new mongoose.Schema({
   
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },

    titleofad:{
        type:String,
        required:true
    },
    file:{
       type:String
       
    },
    
    content:{
        type:String,
        require:true
    },
    
    date:{
        type:Date,
        default:Date.now()
    },
    time:{
        type:Date,
        default:Date.now()
    }
    
});
const Post=module.exports=mongoose.model("Post",postitemSchema);