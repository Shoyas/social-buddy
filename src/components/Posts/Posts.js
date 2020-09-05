import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))

    }, []);
    //console.log(posts);
    return (
        <div>
            <h3>Total Posts : {posts.length}</h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Posts;