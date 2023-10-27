import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    text:{
        type: String,
        require: true
    },
    banner:{
        type: String,
        require: true
    },
    createdAT:{
        type: Date,
         default: Date.now()
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    likes:{
        type: Array,
        require: true,
    },
    comment:{
        type: Array,
        require: true,
    },
});

const News = mongoose.model("News", NewsSchema);

export default News;
