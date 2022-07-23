
import * as api from '../api';

export const getBlogs = () => async ( dispatch ) => {
    try {
        const { data } = await api.fetchBlog();
        dispatch({
            type: 'FETCH_BLOG',
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}

export const createBlog = ( blogData ) => async ( dispatch ) => {
    try {
        const { data } = await api.createBlog(blogData);
        dispatch({
            type: 'CREATE',
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}

export const updateBlog = (id,updateBlogData) => async ( dispatch ) => {
    try {
        const { data } = await api.updateBlog(id,updateBlogData);
        dispatch({
            type: 'UPDATE',
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}

export const deleteBlog = (id) => async ( dispatch ) => {
    try {
         await api.deleteBlog(id);
        dispatch({
            type: 'DELETE',
            payload: id
        });
    } catch (error) {
        console.log(error);
    }
}
