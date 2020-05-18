require('dotenv').config();
const express=require('express');
const router=express.Router();
var User=require('../models/users');
var Post=require('../models/posts');
const nodemailer = require("nodemailer");
const passport =require("passport");
const async = require("async");
const crypto = require("crypto");


    // name:req.body.name,
    // companyname:req.body.companyname,
    // email:req.body.email,
    // adlayout:req.body.adlayout,
    // targetaudience:req.body.targetaudience,
    // theme:req.body.theme,
    // password:req.body.password,




    router.get('/', (req, res, next) => {

        console.log('===== user!!======')
        console.log(req.user)
        if (req.user) {
            res.json({ user: req.user })
        } else {
            res.json({ user: null })
        }
    })


  

    // router.get("/register",(req,res)=>{
    //     res.render("register.ejs");
    // })


    router.post("/register",(req,res)=>{
        console.log(req.body);
        console.log("reallly");
        // if (req.body.password !== req.body.repassword) 
        // {
        //     req.flash('error','passwords don\'t match');
        //     return res.redirect('back');
        // }
            User.register(new User ({
                
                username:req.body.email,
              }),req.body.password, function (err, user) {
                if (err) {
                    if (err.name === "UserExistsError") {
                        return res.send("User Already Exists");
                    
                    }
                    else {
                        console.log(err);
                        return res.send("Oops we messed up! Try Again");
                    }
                }
                else {
                    res.send("Success");
                    
                }
            });
        
    })




    // router.get("/login",(req,res)=>{
    //     res.render("login.ejs");
    // })


    router.post('/login', function (req, res, next) {
        console.log(req.body);
        passport.authenticate('local', function (err, user, info) {
            if (err) {
                console.log(err);
                return res.sendStatus(401);
            }
            if (!user) {
                return res.sendStatus(401);
            }
            req.logIn(user, function (err) {
                if (err) {
                    return res.sendStatus(401);
                }
                user.save();
                return res.send(user);
            });
        })(req, res, next);
    });
    

    router.get('/forgot',(req, res) =>{
        res.render('forgot');
    });






    router.post('/forgot', function (req, res, next) {
        console.log("forgot");
        async.waterfall([
            function (done) {
                crypto.randomBytes(20, function (err, buf) {
                    var token = buf.toString('hex');
                    done(err, token);
                });
            },
            function (token, done) {
                User.findOne({ username: req.body.email }, function (err, user) {
                    if (!user) {
                        console.log("not exists");
                        req.flash('error',"No account with that email address exists");
                        return res.redirect('back');
                    }
    
                    user.resetPasswordToken = token;
                    user.resetPasswordExpires = Date.now() + 1800000;   // 30 min tak hi valid hai
    
                    user.save(function (err) {
                        done(err, token, user);
                    });
                });
            },
            function (token, user, done) {
                console.log(user.username);
                var smtpTransport = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: "rydbikes79@gmail.com",
                        pass: process.env.PASSWORD       
                    }
                });
                var mailOptions = {
                    to: user.username,
                    from: 'rydbikes79@gmail.com',
                    subject: 'RYD Password Reset',
                    text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                        'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                        'If you did not request this, please ignore this email and your password will remain unchanged.\n'
                };
                smtpTransport.sendMail(mailOptions, function (err) {
                    console.log('mail sent');
                   req.flash('success','An e-mail has been sent to ' + user.username + ' with further instructions.');
                    done(err, 'done');
                });
            }
        ], function (err) {
            if (err) return next(err);
            res.redirect('/forgot');
        });
    });
    
    router.get('/reset/:token', function (req, res) {

        User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function (err, user) {
            if (!user) {
                req.flash("error","Password reset token is invalid or has expired.");
                return res.render('forgot', { errors });
            }
            res.render('reset', { token: req.params.token });
        });
    });
    
    router.post('/reset/:token', function (req, res) {
        async.waterfall([
            function (done) {
                User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function (err, user) {
                    if (!user) {
                        req.flash('error', 'Password reset token is invalid or has expired.');
                        return res.redirect('back');
                    }
                    if (req.body.password === req.body.confirm) {
                        user.setPassword(req.body.password, function (err) {
                            user.resetPasswordToken = undefined;
                            user.resetPasswordExpires = undefined;
    
                            user.save(function (err) {
                                req.logIn(user, function (err) {
                                    done(err, user);
                                });
                            });
                        })
                    } else {
                        req.flash("error", "Passwords do not match.");
                        return res.redirect('back');
                    }
                });
            },
            function (user, done) {
                var smtpTransport = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: "rydbikes79@gmail.com",
                        pass: process.env.PASSWORD
                    }
                });
                var mailOptions = {
                    to: user.username,
                    from: "rydbikes79@gmail.com",
                    subject: 'Your password has been changed',
                    text: 'Hello,\n\n' +
                        'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
                };
                smtpTransport.sendMail(mailOptions, function (err) {
                    req.flash('success', 'Success! Your password has been changed.');
                    done(err);
                });
            }
        ], function (err) {
            res.redirect("/");
        });
    });
    
 
     
    

    router.post("/newadd",(req,res)=>{
        console.log(req.body);
        console.log(req.user);
       User.findOneAndUpdate(
            {"_id":req.user._id},
            {$push: {"adds": {heading: req.body.heading, subheading:req.body.subHeading,descp:req.body.description,cost:req.body.cost}}},
            {safe: true, upsert: true, new: true},
            function(err, model){
               if (err){
                 console.log("ERROR: ", err);
                 res.sendStatus(500, err);
               }else{
                 res.sendStatus(200);
               }
              }
            );
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
