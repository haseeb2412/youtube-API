const mongoose = require("mongoose")

const youtubeSchema = new mongoose.Schema({
    title:{
        type:String,
        required :true
    },
    views:{
        type:String,
        required :true
    },
    timestamp:{
        type:String,
        required :true
    },
    channelImage:{
        type:String,
        required :[true,"empty channel Image"]
    },
    channel:{
        type:String,
        required :true
    },
    image:{
        type:String,
        required :[true,"No Image"]
    }
})

// title="Weird Genius - Sweet Scar (ft. Prince Husein)"
// views="58.1M Views"
// timestamp="2 years ago"
// channelImage="https://yt3.ggpht.com/a/AATXAJyhUWH0wx_MBMaRFYULMyAjwRHgoPiIuCgoiTmT=s88-c-k-c0x00ffffff-no-rj"
// channel="Weird Genius"
// image="https://i.ytimg.com/vi/dxIG9JtakBM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGeCi6dYpgCdt1gmXJrijVQBxhTg"

module.exports = mongoose.model('youtube',youtubeSchema);