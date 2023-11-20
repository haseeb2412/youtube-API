const Youtube = require("../models/model")

const getYoutube =async(req,res)=>{
    const {channel,sort} = req.query
    const queryObject = {};

    if(channel){
        queryObject.channel = channel;
    }

    
    if(sort){
        let sortFix = sort.replace(","," ");
        apiData = apiData.sort(sortFix);
    }

    const  mydata = await Youtube.find(queryObject);
    res.status(200).json({mydata, nbHits : mydata.length});


}

const getYoutubetesting=async(req,res)=>{
    const mydata = await Youtube.find(req.query).select();
    res.status(200).json({mydata});
}

module.exports = {getYoutube,getYoutubetesting};