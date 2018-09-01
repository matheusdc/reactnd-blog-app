/**
 * Class that represent the Post 
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteComment } from '../actions';

class Comments extends Component {

  constructor(props) {
    super(props);

    this.handleDeletion = this.handleDeletion.bind(this);
  }

  handleDeletion(id) {
    this.props.deleteComment(id);
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
                <div className="card-footer-item">
                  <div className="buttons has-addons">
                    <span className="button is-small is-success">Upvote</span>
                    <span className="button is-small is-warning">Downvote</span>
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
    deleteComment: (id) => dispatch(deleteComment(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Comments);