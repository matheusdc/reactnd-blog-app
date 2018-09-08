/**
 * Class that represent the Post list 
 */

import React, { Component } from 'react';

import PostHeadline from './PostHeadline'

class Posts extends Component {

  constructor (props) {
    super(props);

    this.state = { sortyBy: 'date'};

    this.sortByDate = this.sortByDate.bind(this);
    this.sortByVotes = this.sortByVotes.bind(this);
    this.sortMethod = this.sortMethod.bind(this);
  }

  sortByDate() {
    this.setState({ sortyBy: 'date'});
  }

  sortByVotes() {
    this.setState({ sortyBy: 'votes'});
  }

  sortMethod(el1, el2) {
    if(this.state.sortyBy === 'votes'){
      return (el2.voteScore - el1.voteScore);
    }
    return (el2.timestamp - el1.timestamp);
  }

  render() {
    return (
      <div>
        <div className="tabs">
          <ul>
            <li className={(this.state.sortyBy === 'votes') ? 'is-active': ''} onClick={this.sortByVotes}><a>Sort by votes</a></li>
            <li className={(this.state.sortyBy === 'date') ? 'is-active': ''} onClick={this.sortByDate}><a>Sort by date</a></li>
          </ul>
        </div>
        {this.props.posts.filter(post => !post.deleted).sort(this.sortMethod).map(post => (
          <PostHeadline key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default Posts;
