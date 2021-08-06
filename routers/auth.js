const express=require('express');
const mongoose=require('mongoose');
const User=require('../models/user')
const router=express.Router();
router.post('/userdetail',async(req,res)=>{
    const {name,email,acnumber,bbalance}=req.body;
    if(!name||!email||!acnumber||!bbalance)
    {
        return res.status(422).json({message:"User Fill the form Correctly"});
    }
    try
    {
       const user=await User.findOne({acnumber:acnumber});
       if(user)
       {
           res.status(422).json({message:"User Already Registered"});
       }
       else
       {
            console.log(name);
           const newuser= new User({name,email,acnumber,bbalance});
           const usersave=await newuser.save();
           res.status(200).json({message:"Register Successfully"});
       }
    }catch(e){
      console.log(e);
   }
})
router.get('/showdata',async(req,res)=>{
    const user=await User.find();
    res.status(200).send(user);
})
router.get('/singleuser/:_id',async(req,res)=>{
    console.log("idhar aaya")
  const user=await User.findOne({_id:req.params._id});
  res.send(user);
})
module.exports=router;