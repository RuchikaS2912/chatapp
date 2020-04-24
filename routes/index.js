const express=require('express');
const router=express.Router();
var User=require('../models/users');
var Post=require('../models/posts');




    router.post("/authuser",(req,res)=>{
        
    })

    router.post("/register",(req,res)=>{
        console.log(req.body);
        const user=new User({
        
        name:req.body.name,
        companyname:req.body.companyname,
        email:req.body.email,
        adlayout:req.body.adlayout,
        targetaudience:req.body.targetaudience,
        theme:req.body.theme,
        password:req.body.password,
        
    })
    console.log(user);
    user.save().then(saveUser=>{
        console.log('registered');
    })
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