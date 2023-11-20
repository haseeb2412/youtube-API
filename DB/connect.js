const mongoose = require("mongoose")


MY_DATABASE = "mongodb+srv://youtube:youtube@cluster0.zutt0pj.mongodb.net/youtube?retryWrites=true&w=majority"

const connectDB =async ()=>{
    try {
        const connect = await mongoose.connect(MY_DATABASE);
        console.log("mongoose Connected",connect.connection.host);
    } catch (error) {
        console.log("database error ",error);
    }
}
module.exports = connectDB;
