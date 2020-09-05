import React from 'react';
import { Container, Typography} from '@material-ui/core';
import SimpleBottomNavigation from '../SimpleBottomNavigation/SimpleBottomNavigation';




const PostDetailComment = (props) => {
    const {postDetails} = props;
    //console.log(postDetails);
    
    const {id, name, email, body} = postDetails;
    
    return (
        

        <Container maxWidth="m" className="main-container">
            <Typography className="post-container" component="div" style={{ backgroundColor: '#F1F1F1', height: '40vh' }}> 
                <h5>Name : {name}</h5>
                <p>Email : {email}</p>
                <p>Comment : {body}</p>

                <div className="button-container">
                    
                    <SimpleBottomNavigation></SimpleBottomNavigation>
                </div>
                
        
            </Typography>
                    
        </Container>
            
            
            
        
    );
};

export default PostDetailComment;