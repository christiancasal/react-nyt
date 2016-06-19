import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  render(){
    return (
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">
              <strong>
                <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                <span>Query</span>
              </strong>
            </h1>
          </div>
          <div className="panel-body">
            <form>
              <div className="form-group">

                <h4 className="">Topic</h4>
                <input type="text" className="form-control " id="search" required />
                <h4 className="" >Start Year</h4>
                <input type="number" className="form-control " id="start" required />
                <h4 className="" >End Year</h4>
                <input type="number" className="form-control " id="end" required />
              </div>
              <div className="pull-right">
                <button type="button" className="btn btn-danger btn-sm">
                  <h4>Submit</h4>
                </button>
              </div>

            </form>
          </div>
        </div>
    );
  }
}

module.exports = Search;
