import React from 'react';
import connect from '../../libs/connect';
import PostActions from '../../actions/PostActions';

const Posts = ({
    posts, PostActions, ...props
}) => {

    return (
        <div className="posts">
            {
                posts.map(
                    ({id, title}) => 
                    <li key={id}>
                        {title}
                    </li>
                )
            }
        </div>
    );
};

export default connect(
    ({posts}) => ({
        posts
    }), {
        PostActions
    }
)(Posts)