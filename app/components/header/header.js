import React from 'react';
import { Link } from 'react-router';
import helper from '../../utils/helper.js';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      article_data : []
    };

  }
  render(){
    // console.log(this);

    return(
    <nav classNameName="navbar navbar-inverse" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">New York Times... with React!</a>
        </div>
        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
              <Link to="/saved">Saved Articles</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}
