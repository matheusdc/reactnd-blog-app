/**
 * Class that represent the Comment
 */

import React from 'react';

const Comment = (props) => {
  return (
    <div className="card comment">
      <div className="card-content">
        <p>{props.body}</p>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">{props.author}</div>
        <div className="card-footer-item">
          <span className="tag is-dark">Vote Score: {props.voteScore}</span>
        </div>
        <div className="card-footer-item">
          <div className="buttons has-addons">
            <span className="button is-small is-success" onClick={() => props.handleVote(props.id, 'upVote')}>Upvote</span>
            <span className="button is-small is-warning" onClick={() => props.handleVote(props.id, 'downVote')}>Downvote</span>
            <span className="button is-small is-info" onClick={() => props.handleUpdate(props.id)}>Edit</span>
            <span className="button is-small is-danger" onClick={() => props.handleDeletion(props.id)}>Delete</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Comment;