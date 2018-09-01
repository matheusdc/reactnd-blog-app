/**
 * Class that represent the Post list 
 */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitPostToServer } from '../actions/index';

const uuidv1 = require('uuid/v1');

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.title = React.createRef();
    this.body = React.createRef();
    this.author = React.createRef();
    this.category = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const title = this.title.current.value;
    const author = this.author.current.value;
    const body = this.body.current.value;
    const category = this.category.current.value;
    const id = uuidv1();

    this.props.createPost({ id, timestamp: new Date().getTime(), title, author, body, category });
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="column">
        <h1 className="title">Create a new post</h1>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input className="input" type="text" ref={this.title} placeholder="Title" />
          </div>
        </div>

        <div className="field">
          <label className="label">Author</label>
          <div className="control">
          <input className="input" type="text" ref={this.author} placeholder="Author" />
          </div>
        </div>

        <div className="field">
          <label className="label">Category</label>
          <div className="control">
          <input className="input" type="text" ref={this.category} placeholder="Category" />
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
          <textarea className="textarea" ref={this.body} placeholder="Body" />
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
    createPost: (post) => dispatch(submitPostToServer(post))
  };
};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(NewPost));