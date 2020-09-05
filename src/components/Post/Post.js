import React from 'react';
import {Button, Container, Typography} from '@material-ui/core';
import './Post.css';
import {Link} from "react-router-dom";
import SimpleBottomNavigation from '../SimpleBottomNavigation/SimpleBottomNavigation';


const Post = (props) => {
    //console.log(props.post);
    const {id, title, body} = props.post;


    return (
    
        <Container maxWidth="m" className="main-container">
            <Typography className="post-container" component="div" style={{ backgroundColor: '#F1F1F1', height: '30vh' }}> 
                <h3>Id : {id}</h3>
                <p>Title : {title}</p>
                <p><small>{body}</small></p>
                <div className="button-container">
                    <Button variant="outlined" color="primary">
                        <Link to={`/seeDetails/${id}`} className="button">
                            
                            See Details
                        
                        </Link>                    
                    </Button>
                    <SimpleBottomNavigation></SimpleBottomNavigation>
                </div>
                
           
            </Typography>
            
        </Container>
  
    );
};

export default Post;
