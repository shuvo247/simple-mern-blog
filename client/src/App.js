import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { useDispatch } from 'react-redux';
import { getBlogs } from './actions/blogs';

function App() {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
  useEffect( () => {
    dispatch( getBlogs() );
  },[currentId,dispatch]);
  return (
    <div className="app">
       <div className="form">
          {/* code here */}
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
        <Posts setCurrentId={setCurrentId} />
    </div>
  );
}

export default App;
