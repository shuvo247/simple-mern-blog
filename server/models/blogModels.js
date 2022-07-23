import mongoose from "mongoose";
const blogSchema = mongoose.Schema({
    title : String,
    message : String,
    author : String,
    tags : [String],
    thumbnail: String,
    likeCount : {
        type: Number,
        default: 0
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
});
const blogModels = mongoose.model("Blog", blogSchema);
export default blogModels;