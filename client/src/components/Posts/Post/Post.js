import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../../../actions/blogs';

export default function Post({ blog,setCurrentId }) {
  const dispatch = useDispatch();
  
  return (
    <div>
        <div className="card">
          <div className="card__header">
            <img src={ blog.thumbnail } alt="card__image" className="card__image" width={600} />
          </div>
          <div className="card__body">
            <div className="blog__tags">
                {
                  blog.tags.map((tag) => <span key={tag} className="tag tag-blue">{tag}</span>)
                } 
             </div>
                        
              <div className="card__button">
              <button className='card__edit' onClick={() => setCurrentId(blog._id)}>Edit</button>
              <button className='delete__button' onClick={() => dispatch(deleteBlog(blog._id))}>Delete</button>
              </div>
            <h4>{ blog.title }</h4>
            <p>{ blog.message }</p>
          </div>
          <div className="card__footer">
            <div className="user">
              <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className="user__image" />
              <div className="user__info">
                <h5>{blog.author}</h5>
                <small>{ blog.createdAt }</small>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
