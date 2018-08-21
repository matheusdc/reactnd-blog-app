/**
 * Class that represent the Category list 
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';

import { Link } from 'react-router-dom';

class Categories extends Component {

  componentDidMount() {
    this.props.fetchData();
  }
  
  render() {
    return (
      <div>
        <ul>
          {this.props.categories.map(category => (
            <li key={category.name}><Link to={'/category/' + category.path}>{category.name}</Link></li>
          ))}
          <li><Link to="/">All categories</Link></li>
        </ul>
      </div>
    )
  };
}

function mapStateToProps({ category }) {
  return {
    categories: category.categories
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: () => dispatch(fetchCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
