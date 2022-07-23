import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'

export default function Posts( { setCurrentId } ) {
  const blogs = useSelector(state => state.blogs);
  return (
    <div>
      <div className="container">
        {blogs.map(blog => <Post key={blog._id} blog={ blog } setCurrentId={setCurrentId} />)}
      </div>
    </div>
  )
}
