/**
 * Class that represent the Post Editor
 */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitPostToServer, sendPostEditsToServer } from '../actions';

const uuidv1 = require('uuid/v1');

class PostEditor extends Component {
  constructor(props) {
    super(props);

    const title = (this.props.title) ? this.props.title : '';
    const author = (this.props.author) ? this.props.author : '';
    const body = (this.props.body) ? this.props.body : '';
    const category = (this.props.category) ? this.props.category : '';
    const editing = (this.props.id) ? true : false;

    this.state = {
      title,
      author,
      body,
      category,
      editing
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.title !== this.props.title && typeof this.props.title !== 'undefined') {
      this.setState({
        title: this.props.title,
        author: this.props.author,
        category: this.props.category,
        body: this.props.body,
        editing: true
      });
    }
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
    if(this.state.editing) {
      this.updatePost();
      return;
    }
    this.createPost();
  }

  createPost() {
    const { title, author, body, category } = this.state;
    const id = uuidv1();

    this.props.createPost({ id, timestamp: new Date().getTime(), title, author, body, category });
    this.props.history.push('/');
  }

  updatePost() {
    const { title, author, body, category } = this.state;
    const id = this.props.id;

    this.props.updatePost({ id, timestamp: new Date().getTime(), title, author, body, category });
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="column">
        <h1 className="title">{(this.state.editing) ? 'Editing post' : 'Create a new post'}</h1>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input className="input" type="text" name="title" disabled={this.state.editing} onChange={this.handleChange} value={this.state.title} placeholder="Title" />
          </div>
        </div>

        <div className="field">
          <label className="label">Author</label>
          <div className="control">
          <input className="input" type="text"  name="author" disabled={this.state.editing} onChange={this.handleChange} value={this.state.author} placeholder="Author" />
          </div>
        </div>

        <div className="field">
          <label className="label">Category</label>
          <div className="control">
          <input className="input" type="text" name="category" disabled={this.state.editing} onChange={this.handleChange} value={this.state.category} placeholder="Category" />
          </div>
        </div>

        <div className="field">
          <label className="label">Body</label>
          <div className="control">
          <textarea className="textarea" name="body" onChange={this.handleChange} value={this.state.body} placeholder="Body" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button onClick={this.handleSubmit} className="button is-link" disabled={!this.state.title || !this.state.author || !this.state.category || !this.state.body}>{(this.state.editing) ? 'Save changes' : 'Submit'}</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(submitPostToServer(post)),
    updatePost: (post) => dispatch(sendPostEditsToServer(post))
  };
};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(PostEditor));