import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search/search.js';

import { Router, Route, Link } from 'react-router';

// not using an ES6 transpiler
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link;

class Main extends React.Component {
  render(){
    return (
        <div className="main-container">
          <div className="row">
            <div className="col-md-12">
              <Search />
            </div>
          </div>
        </div>
    );
  }
}

ReactDOM.render(
  <Main />, document.getElementById('app')

);
