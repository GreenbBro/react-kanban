import React from 'react';
import Post from '../Post/Post';

export default ({posts}) => (
    <div className="posts">
        {posts.map(post =>
            <Post className="post" key={post.id} post={post} />
        )}
    </div>
)