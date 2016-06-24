import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search/search.js';



class Main extends React.Component {
  render(){
    return (
        <div className="main-container">
          <div className="row">
              <Search />
          </div>
        </div>
    );
  }
}

module.exports = Main;

ReactDOM.render(
  <Main />, document.getElementById('app')

);
