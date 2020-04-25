const express=require('express');
const router=express.Router();
var User=require('../models/users');
var Post=require('../models/posts');




    router.post("/authuser",(req,res)=>{
        
    })


    // name:req.body.name,
    // companyname:req.body.companyname,
    // email:req.body.email,
    // adlayout:req.body.adlayout,
    // targetaudience:req.body.targetaudience,
    // theme:req.body.theme,
    // password:req.body.password,


    router.get("/register",(req,res)=>{
        res.render("register.ejs");
    })

    router.post("/register",(req,res)=>{
        console.log(req.body);
        // if (req.body.password !== req.body.rePassword) 
        // {
        //     req.flash('error','passwords don\'t match');
        //     return res.redirect('back');
        // }
      
        
        {
            User.register(new User ({
                name:req.body.name,
                companyname:req.body.companyname,
                username:req.body.email,
                adlayout:req.body.adlayout,
                targetaudience:req.body.targetaudience,
                theme:req.body.theme,
              }),req.body.password, function (err, user) {
                if (err) {
                    if (err.name === "UserExistsError") {
                        req.flash('error',"User Already Exists");
                        return res.redirect('back');
                    
                    }
                    else {
                        console.log(err);
                        req.flash("error", "Oops we messed up! Try Again");
                        return res.redirect('back');
                    }
                }
                else {
                    req.flash("You have registered! Login to your account");
                    
                }
            });
        }
    //     const user=new User({
        
        
        // name:req.body.name,
        // companyname:req.body.companyname,
        // email:req.body.email,
        // adlayout:req.body.adlayout,
        // targetaudience:req.body.targetaudience,
        // theme:req.body.theme,
        // password:req.body.password,
        
    // })
    // console.log(user);
    // user.save().then(saveUser=>{
    //     console.log('registered');
    // })
    })

    router.post("/post",(req,res)=>{
        console.log(req.body);
    const post=new Post({
    
    title:req.body.title,
    file:req.body.filename,
    content:req.body.content
    
    })
    console.log(post);
    user.save().then(savePost=>{
    console.log('postcreated');
    })
    })












module.exports=router;