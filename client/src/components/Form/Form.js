import React, { useState,useEffect } from 'react'
import FileBase from 'react-file-base64';
import { useDispatch,useSelector } from 'react-redux';
import { createBlog,updateBlog } from '../../actions/blogs.js';

export default function Form({currentId,setCurrentId}) {
    const dispatch = useDispatch();
    const blog = useSelector(state => currentId ? state.blogs.find( blog => blog._id === currentId ) : null);

    // Hangle form State
    const  [blogData,setBlogData] = useState({
        title: '',
        message: '',
        author: '',
        tags : '',
        thumbnail: ''
    });

    // Handle Form Submit 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId ) {
          dispatch( updateBlog( currentId, blogData ) );
        }else {
          dispatch( createBlog( blogData ) );
        }
        clearForm();
    }
    const clearForm = () => {
        setCurrentId(null);
        setBlogData({
          title: '',
          message: '',
          author: '',
          tags : '',
          thumbnail: ''
        }); 
    }
    useEffect(() => {
      if(blog) setBlogData(blog);
    }, [blog]);
  return (
    <div>
        <div className="card">
          <form className="card-form" onSubmit={handleSubmit}>
            <div className="input">
              <input type="text" placeholder='Author' className="input-field" value={ blogData.author } onChange={(e) => setBlogData({ ...blogData, author : e.target.value }) }  />
            </div>
            <div className="input">
              <input type="text" placeholder='Title' className="input-field" value={ blogData.title } onChange={(e) => setBlogData({ ...blogData, title : e.target.value }) }  />
            </div>
            <div className="input">
              <textarea placeholder='Message' className="input-field" value={ blogData.message } onChange={(e) => setBlogData({ ...blogData, message : e.target.value }) }  />
            </div>
            <div className="input">
              <input type="text" placeholder='Tags' className="input-field" value={ blogData.tags } onChange={(e) => setBlogData({ ...blogData, tags : e.target.value.split(',') }) } />
            </div>
            <div className="input">
                <FileBase type='file' multiple={false} onDone={ ( { base64 } ) => setBlogData({ ...blogData, thumbnail: base64 })} />
            </div>
            <div className="action">
              <button className="action-button">{ currentId ? 'Update' : 'Save' }</button>
            </div>
          </form>
        </div>
    </div>
  )
}
