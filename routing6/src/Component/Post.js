import React from 'react';
import { Link } from 'react-router-dom';

const Post =(props)=>{
  console.log(props);
    return(
        
        <div className='card'>
            <div className='card-body'>
            <div className='card-heading text-danger'>
                Post
            </div>
            <hr/>
            <div className='card-text'>
                <h3>Post Page</h3>
                <p>Dummy Text Dummy Text Dummy Textv Dummy Text Dummy Text
                   Dummy Text Dummy Text Dummy Text
                </p>
                <h2>JavaScript</h2>
<Link to={`/post/Javascript?page=1`} className='btn btn-success'>Details</Link>
<h2>Node</h2>
<Link to={`/post/Node?page=2`} className='btn btn-warning'>Details</Link>
<h2>React</h2>
<Link to={`/post/React?page=3`} className='btn btn-danger'>Details</Link>
           </div>
           </div>
        </div>
    )
}

export default Post;