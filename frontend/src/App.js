import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import Posts from './components/Posts';
import NewPost from './components/NewPost';
import Categories from './components/Categories';

class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <h1>Categories</h1>
        <Categories />

        <h1>Posts</h1>
        <Posts />

        <Route exact path="/new" component={NewPost}/>
      </div>
    );
  }
}

export default App;
