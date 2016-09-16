import React from 'react';
import connect from '../../libs/connect';
import Posts from '../Posts/Posts';
import PostActions from '../../actions/PostActions';



const Post = ({
    post, posts, PostActions, ...props
}) => {

    PostActions.fetch();

    return (
        <div {...props}>
            {post.title}
        </div>
    );
};


export default connect(
    ({posts}) => ({
        posts
    }), {
        PostActions
    }
)(Post)