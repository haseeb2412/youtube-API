require("dotenv").config();
const connectDB = require("./DB/connect");
const youtube = require("./models/model")
const youtubejson = require("./youtube.json")

const start =async ()=>{
    try {
        await connectDB(process.env.MY_DATABASE);
        await youtube.deleteMany();
        await youtube.create(youtubejson);
        console.log("success")
    } catch (error) {
        console.log(error);
    }
}
// start();