/**
 * Class that represent the Post list 
 */

import React, { Component } from 'react';

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

    this.props.createPost({ id, timestamp: new Date(), title, author, body, category });
  }

  render() {
    return (
      <div>
        <h1>Create a new post</h1>
        <input type="text" ref={this.title} placeholder="Title" /><br />
        <input type="text" ref={this.author} placeholder="Author" /><br />
        <input type="text" ref={this.category} placeholder="Category" /><br />
        <textarea ref={this.body} placeholder="Body" />
        <button onClick={this.handleSubmit}>Post</button>
      </div>
    );
  }
}

function mapStateToProps({}) {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(submitPostToServer(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost);