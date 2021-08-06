const express=require('express');
const app=express();
require('./db/conn');
app.use(express.json());
app.use(require('./routers/auth'))
app.get('/',(req,res)=>{
    res.send("hello");
})
app.listen(5000,()=>{
    console.log(`listening from the port`);
})