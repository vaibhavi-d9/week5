const express=require('express');
const app=express();
app.listen(4500,()=> {
    console.log("server started");
});
app.get('/',(req,res)=>{
    res.send("hello receive get request");
});
