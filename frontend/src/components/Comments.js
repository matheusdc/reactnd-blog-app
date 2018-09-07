/**
 * Class that represent the Post 
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteComment, voteComment, editingComment } from '../actions';
import CommentEditor from './CommentEditor';
import Comment from './Comment';

class Comments extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editing: ''
    };

    this.handleDeletion = this.handleDeletion.bind(this);
    this.handleVote = this.handleVote.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleDeletion(id) {
    this.props.deleteComment(id);
  }

  handleVote(id, vote) {
    this.props.voteComment(id, vote);
  }

  handleUpdate(id) {
    this.props.editComment({ id });
  }

  render() {
    const editingComment = this.props.editingComment;
    return (
      <div>
        {this.props.comments.filter(comment => !comment.deleted).map((comment) => {
          if(editingComment === comment.id) {
            return (<CommentEditor key={comment.id} {...comment} />)
          }
          return (<Comment key={comment.id} {...comment}
            handleVote={this.handleVote}
            handleUpdate={this.handleUpdate}
            handleDeletion={this.handleDeletion} />);
        }
        )}
      </div>
    );
  }
}

function mapStateToProps({ comment }) {
  return {
    editingComment: comment.editingComment
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (id) => dispatch(deleteComment(id)),
    voteComment: (id, vote) => dispatch(voteComment(id, vote)),
    editComment: (id) => dispatch(editingComment(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);