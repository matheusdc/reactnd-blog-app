/**
 * Class that represent the Post 
 */

import React from 'react';

import PostHeadline from './PostHeadline';

const PostDetails = (props) => {
  return (
    <div>
      <PostHeadline {...props} />
      {/* <CommentList> */}
    </div>
  );
}

export default PostDetails;