/**
 * Class that represent the Post list 
 */

import React from 'react';

const NewPost = ({ match }) => {
    return (
        <h1>New Post!! { match.params.id }</h1> 
    )
}

 export default NewPost;