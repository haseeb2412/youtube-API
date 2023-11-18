const express = require('express')

const port = process.env.PORT || 5000;
const app  = express();
app.get("/",(req,res)=>{
    res.send("port is working");
})

const start=()=>{
    app.listen(port,()=>{
        console.log("Running data is on port",port);
    })
}
start();