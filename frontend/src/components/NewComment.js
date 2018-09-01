/**
 * Class that represent the Post list 
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitCommentToServer } from '../actions/index';

const uuidv1 = require('uuid/v1');

class NewComment extends Component {
  constructor(props) {
    super(props);
    this.body = React.createRef();
    this.author = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const author = this.author.current.value;
    const body = this.body.current.value;
    const parentId = this.props.post.id;
    const id = uuidv1();

    this.props.addComment({ id, timestamp: new Date(), parentId, author, body });
  }

  render() {
    return (
      <div>
        <div className="field">
          <label className="label">Author</label>
          <div className="control">
          <input className="input" type="text" ref={this.author} placeholder="Author" />
          </div>
        </div>

        <div className="field">
          <label className="label">Comment</label>
          <div className="control">
          <textarea className="textarea" ref={this.body} placeholder="Comment" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button onClick={this.handleSubmit} className="button is-link">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(submitCommentToServer(comment))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewComment);