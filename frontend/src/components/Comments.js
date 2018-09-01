/**
 * Class that represent the Post 
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteComment, voteComment } from '../actions';

class Comments extends Component {

  constructor(props) {
    super(props);

    this.handleDeletion = this.handleDeletion.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  handleDeletion(id) {
    this.props.deleteComment(id);
  }

  handleVote(id, vote) {
    this.props.voteComment(id, vote);
  }

  render() {
    return (
      <div>
        {this.props.comments.filter(comment => !comment.deleted).map((comment) => (
            <div className="card" key={comment.id}>
              <div className="card-content">
                <p>{comment.body}</p>
              </div>
              <footer className="card-footer">
                <div className="card-footer-item">{comment.author}</div>
                <div className="card-footer-item">Vote Score: {comment.voteScore}</div>
                <div className="card-footer-item">
                  <div className="buttons has-addons">
                    <span className="button is-small is-success" onClick={() => this.handleVote(comment.id, 'upVote')}>Upvote</span>
                    <span className="button is-small is-warning" onClick={() => this.handleVote(comment.id, 'downVote')}>Downvote</span>
                    <span className="button is-small is-danger" onClick={() => this.handleDeletion(comment.id)}>Delete</span>
                  </div>
                </div>
              </footer>
            </div>
          ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (id) => dispatch(deleteComment(id)),
    voteComment: (id, vote) => dispatch(voteComment(id, vote))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Comments);