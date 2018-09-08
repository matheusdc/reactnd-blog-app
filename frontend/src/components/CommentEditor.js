/**
 * Class that represent the Comment Editor
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitCommentToServer, sendCommentEditsToServer } from '../actions/index';

const uuidv1 = require('uuid/v1');

class CommentEditor extends Component {
  constructor(props) {
    super(props);

    const { author, body } = this.props;

    this.state = {
      author: (author) ? author : '',
      body: (body) ? body : '',
      editing: (author || body) ? true : false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createComment = this.createComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit() {
    if(this.state.editing){
      this.updateComment();
      return;
    }
    this.createComment();
  }

  updateComment() {
    const { author, body } = this.state;
    const {parentId, id} = this.props;

    this.props.updateComment({ id, timestamp: new Date(), parentId, author, body });
  }

  createComment() {
    const { author, body } = this.state;
    const parentId = this.props.post.id;
    const id = uuidv1();

    this.props.addComment({ id, timestamp: new Date(), parentId, author, body });
    this.setState({ author: '', body: '', editing: false })
  }

  render() {
    return (
      <div className="card comment">
        <div className="card-content">
          <div className="subtitle">{(this.state.editing) ? 'Edit comment' : 'Leave a comment!'}</div>
          <div className="field">
            <label className="label is-small">Author</label>
            <div className="control">
            <input name="author" className="input is-small" type="text" onChange={this.handleChange} disabled={this.state.editing} value={this.state.author} placeholder="Author" />
            </div>
          </div>

          <div className="field">
            <label className="label is-small">Comment</label>
            <div className="control">
            <textarea name="body" className="textarea is-small" onChange={this.handleChange} value={this.state.body} placeholder="Comment" />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button onClick={this.handleSubmit} className="button is-link is-small" disabled={(!this.state.body || !this.state.author)}>{(this.state.editing) ? 'Save changes' : 'Comment' }</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(submitCommentToServer(comment)),
    updateComment: (comment) => dispatch(sendCommentEditsToServer(comment))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CommentEditor);