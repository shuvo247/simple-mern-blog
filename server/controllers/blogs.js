import mongoose from 'mongoose';
import blogModels from '../models/blogModels.js';
export const getBlog = async (req,res) => {
    try {
        const Blog = await blogModels.find();
        res.status(200).json(Blog);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
    
}

export const createBlog = async (req,res) => {

    const {title, message, author, tags, thumbnail} = req.body;
    const blog = new blogModels({
        title,
        message,
        author,
        tags,
        thumbnail
    });

    try {
        const newBlog = await blog.save();
        res.status(200).json(newBlog);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}


export const updateBlog = async (req,res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if( mongoose.Types.ObjectId.isValid(_id) ) {
        try {
            const blog = await blogModels.findByIdAndUpdate(_id,{...post,_id},{new: true});
            res.status(200).json(blog);
        } catch (error) {
            res.status(404).json({error: error.message});
        }
    } else {
        res.status(404).json({error: 'Invalid Id'});
    }
}

export const deleteBlog = async (req,res) => {
    const { id: _id } = req.params;
    if( mongoose.Types.ObjectId.isValid(_id) ) {
        try {
            const blog = await blogModels.findByIdAndRemove(_id);
            res.status(200).json(blog);
        } catch (error) {
            res.status(404).json({error: error.message});
        }
    } else {
        res.status(404).json({error: 'Invalid Id'});
    }
}
