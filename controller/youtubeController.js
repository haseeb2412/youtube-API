const Youtube = require("../models/model")

const getYoutube =async(req,res)=>{
    const {} = req.query
}

const getYoutubetesting=async(req,res)=>{
    const mydata = await Youtube.find(req.query).select();
    res.status(200).json({mydata});
}

module.exports = {getYoutube,getYoutubetesting}