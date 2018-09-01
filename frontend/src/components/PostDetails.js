/**
 * Class that represent the Post 
 */

import React from 'react';
import { Link } from 'react-router-dom';

const PostDetails = (props) => {
  return (
    <div>
      <p className="title">
        <Link to={`/posts/${props.id}`} style={{ textDecoration: 'none' }} className="title">
          { props.title }
        </Link>
        <span className="tag is-light">{props.category}</span>
      </p>
      <p className="subtitle">{`${props.author}`}</p>
      <p className="subtitle">{`Vote Score: ${props.voteScore}`}</p>

      <p>{props.body}</p>
      <br />
    </div>
  );
}

export default PostDetails;