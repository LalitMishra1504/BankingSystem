const mongoose=require('mongoose');
const dotenv=require("dotenv");
dotenv.config({path:'./config.env'});
const DB=process.env.DATABASE
// const DB='mongodb+srv://lalit:lalit2000@cluster0.0rpwc.mongodb.net/banking?retryWrites=true&w=majority'
mongoose.connect(DB,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connect to database");
}).catch((e)=>{
    console.log("not connect");
});