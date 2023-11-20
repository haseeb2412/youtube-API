const Youtube = require("../models/model")

const getYoutube =async(req,res)=>{
    const {channel,sort,timestamp} = req.query
    const queryObject = {};

    if(channel){
        queryObject.channel = channel;
    }
    if(timestamp){
        queryObject.timestamp = timestamp;
    }

    let apiData = Youtube.find(queryObject);
    

    if(sort){
        let sortFix = sort.replace(","," ");
        apiData = apiData.sort(sortFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;

    let skip =(page-1)*limit;
    apiData  = apiData.skip(skip).limit(limit);

        console.log(queryObject);
        const mydata = await Youtube.find(req.query).skip(2);

    // const  mydata = await Youtube.find(queryObject);
    res.status(200).json({mydata, nbHits : mydata.length});


}

const getYoutubetesting=async(req,res)=>{
    const mydata = await Youtube.find(req.query).select();
    res.status(200).json({mydata});
}

module.exports = {getYoutube,getYoutubetesting};