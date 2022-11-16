import React from 'react';
import { useParams,useSearchParams} from 'react-router-dom';

const PostDetails =(props)=>{
   let params = useParams();
   let [searchParams] = useSearchParams();
    return(
       
        <div className='card'>
            <div className='card-body'>
            <div className='card-heading text-info'>
                <h4>PostDetails</h4>
            </div>
            <hr/>
            <div className='card-text'>
                <h3>{params.topic} Page</h3>
                <p> {params.topic} Dummy Text Dummy Text Dummy Textv Dummy Text Dummy Text
                   Dummy Text Dummy Text Dummy Text
                </p>
                <p>You are on page number {searchParams.getAll('page')}</p>
           </div>
           </div>
        </div>
    )
}

export default PostDetails;