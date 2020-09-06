import React, { useState, useEffect } from 'react';
import PostDetailComment from '../PostDetailComment/PostDetailComment';
import SinglePost from '../SinglePost/SinglePost';
import { useParams } from 'react-router-dom';




const PostDetail = () => {
    let id = useParams();
    //console.log(id.id);
    
    
    const [postDetail, setPostDetail] = useState([]);

    useEffect(() => {
        const urlComment = "https://jsonplaceholder.typicode.com/comments";
        fetch(urlComment)
        .then(res => res.json())
        .then(data => setPostDetail(data))
    }, [])

    let start = id.id;
    //console.log(start);
    let end = start + 1;
    //console.log(end);
    const postDetails = postDetail.slice(start, end);   


    return (
        <div>
            
            <SinglePost></SinglePost>
            <h1>Total comments : {postDetails.length}</h1>
            
            {
                postDetails.map((postDetails) => <PostDetailComment postDetails={postDetails}></PostDetailComment>)
            }
        </div>
    );
};

export default PostDetail;