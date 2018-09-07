/**
 * Class that represent the Edit Post Page 
 */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPostById } from '../actions';
import PostEditor from '../components/PostEditor';

class EditPostPage extends Component {

  componentDidMount() {
    this.props.fetchPostById(this.props.match.params.id);
  }

  render() {
    return (
      <div className="column">
        <PostEditor {...this.props.post} />
      </div>
    );
  }
}

function mapStateToProps({ post }) {
  return {
    post: post.activePost
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostById: (id) => dispatch(fetchPostById(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPostPage));
