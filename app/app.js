import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search/search.js';
import Header from './components/header.js';
import Saved from './components/saved/saved.js';
import SavedResults from './components/saved/saved_results.js';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

class Main extends React.Component {
  render(){
    return (
      <div className="container">
          <Header/>
      <div className="jumbotron">
        <h2 className="text-center">
          <strong> (ReactJS) New York Times Article Scrubber</strong>
        </h2>
        <h3 className="text-center">Search for and save articles of interest.</h3>
      </div>
        <div className="main-container">
          <div className="row">
              <Search />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Main;

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ Main } />
    <Route path="/saved" component={ Saved }>
    </Route>
  </Router>
  // <Main />,
  , document.getElementById('app')

);
