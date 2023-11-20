const express = require('express')
const connectToDatabase = require("./DB/connect");


const port = process.env.PORT || 5000;
const app  = express();

app.use("/testing",require("./routes/youtube"))


app.get("/",(req,res)=>{
    res.send("port is working");
})

const start=async()=>{
    try {
        await connectToDatabase(); // Pass the MongoDB connection string
        app.listen(port, () => {
            console.log(`Running data on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}
start();