import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link, Route } from 'react-router-dom';

import Posts from './components/Posts';
import NewPost from './components/NewPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/posts">Posts</Link>
        <Link to="/new">New Post</Link>

        <Route exact path="/posts" component={Posts}/>
        <Route exact path="/new" component={NewPost}/>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
