import React, {useState, useEffect} from 'react';

const Posts = () => {
    const [type, setType] = useState ('posts');

    return(
        <div>
                <button onClick={() => setType('posts')}>Posts</button>
                <button onClick={() => setType('users')}>Users</button>
                <button onClick={() => setType('comments')}>Comments</button>  
                <h1>{type}</h1>
        </div>
    )
}

export default Posts;