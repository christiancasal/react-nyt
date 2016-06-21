import React from 'react';
import ReactDOM from 'react-dom';


class Results extends React.Component{
  constructor(props){
    super(props);
      this.state = {

      }
  }
  render(){
    return (
        <div className="list-group-item col-md-12">
          <h5 className="col-md-12">This will be the title/url</h5>
          <h6 className="col-md-8">This will be the date published</h6>
            <div className='btn-group col-md-4'>
              <a className='pull-right'>
              <button className="btn btn-default">Save</button>
              <button className="btn btn-default">View Article</button>
              </a>
            </div>
          {/*<div>and this is {this.props.data}</div>*/}
        </div>

    )
  }
}
//props
module.exports = Results;
