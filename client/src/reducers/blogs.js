const blogs = (blogs = [], action) => {
    switch (action.type) {
        case 'FETCH_BLOG' :
            return action.payload;
        case 'CREATE' :
            return [...blogs, action.payload];
        case 'UPDATE' :
            return blogs.map(blog => blog._id === action.payload._id ? action.payload : blog);
        case 'DELETE' :
            return blogs.filter(blog => blog._id !== action.payload);
        default:
            return blogs;
    }

}
export default blogs;