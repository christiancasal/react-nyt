import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search/search.js';

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
  <Main />, document.getElementById('app'));
