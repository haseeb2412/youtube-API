const mongoose = require("mongoose")

const dbURL = "my mongo db url"


const connectDB =async ()=>{
    try {
        const connect = await mongoose.connect(dbURL);
        console.log("mongoose Connected",connect.connection.host);
    } catch (error) {
        console.log("database error ",error);
    }
}
module.exports = connectDB;
