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
router.post('/transfermoneyuser',async(req,res)=>{
    console.log("aagya");
    try
    {
        const {acnumber,acnumber1,bbalance}=req.body;
        console.log(acnumber);
        // if(sendernumber===recievernumber)
        // {
        //     res.json({message:"same account Number"});
        // }
        const sender=await User.findOne({acnumber:acnumber});
        const reciever=await User.findOne({acnumber:acnumber1});
        console.log(reciever);
        if(!sender||!reciever)
        {
            console.log("idahr bhi aaya")
            res.status(400).send("User Not Found");
        }
        // console.log(sender)
            if(sender.bbalance>=bbalance)
            {
                sender.bbalance=parseInt(sender.bbalance)-parseInt(bbalance);
                reciever.bbalance=parseInt(reciever.bbalance)+parseInt(bbalance);
                await sender.save();
                await reciever.save();
            }
            else
            {
                res.json({message:"insufficient balance"});
            }
        // res.send(reciever);
    }catch(e){
        console.log(e);
    }
})
router.get('/transhistory',async(req,res)=>{
    const users=await User.find();
    res.status(400).send(users);
})
module.exports=router;