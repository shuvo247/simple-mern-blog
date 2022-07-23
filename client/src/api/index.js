import axios from "axios";
const url = "https://simple-mern-blog-app.herokuapp.com/blogs";

export const fetchBlog = () => axios.get(url);
export const createBlog = ( blogData ) => axios.post(url, blogData);
export const updateBlog = (id,updateBlogData) => axios.patch(`${url}/${id}`, updateBlogData);
export const deleteBlog = (id) => axios.delete(`${url}/${id}`);