const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    acnumber:{
        type:String,
        require:true
    },
    bbalance:{
        type:Number,
        reuire:true
    }
})

const User=new mongoose.model('user',userSchema);
module.exports=User;