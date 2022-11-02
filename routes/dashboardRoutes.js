const express = require('express');
const router = express.Router();
// const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login');

//Importing model
// const Registration = require('../models/User');
// const UrbanFarmerUpload = require('../models/Urbanfarmerupload');

//structure of a route
router.get('/dashboardao',connectEnsureLogin.ensureLoggedIn(), (req,res) =>{
res.render('dashboardAO');
})
router.post('/dashboard',async(req,res) =>{
    console.log(req.body);
   
});
router.get('/dashboardfo',connectEnsureLogin.ensureLoggedIn(), (req,res) =>{
    res.render('dashboardFO');
    })
    router.post('/dashboardfo',async(req,res) =>{
        console.log(req.body);
       
    });
    router.get('/dashboarduf',connectEnsureLogin.ensureLoggedIn(), (req,res) =>{
        res.render('dashboardUF');
        })
        router.post('/dashboarduf',async(req,res) =>{
            console.log(req.body);
           
        });


//This is the last line always
module.exports = router;