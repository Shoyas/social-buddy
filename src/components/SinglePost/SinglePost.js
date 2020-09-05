import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography} from '@material-ui/core';
import SimpleBottomNavigation from '../SimpleBottomNavigation/SimpleBottomNavigation';

const SinglePost = () => {
    
    let {id} =useParams();

    const [singlePost, setSinglePost] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setSinglePost(data))
    }, [])

    //console.log(singlePost);

    const {userId, title, body} = singlePost;


    return (
        <Container maxWidth="m" className="main-container">
            <Typography className="post-container" component="div" style={{ backgroundColor: '#F1F1F1', height: '40vh' }}> 
                <h1>Post Number : {singlePost.id} </h1>
                <p>Title : {title}</p>
                <p>Body : {body}</p>

                <div className="button-container">
                    
                    <SimpleBottomNavigation></SimpleBottomNavigation>
                </div>
                
                <hr/>
            </Typography>
                    
        </Container>


        
    );
};

export default SinglePost;