import React from 'react';
import helper from '../../utils/helper.js';

export default class SavedResults extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        data : []
      }
  }
  // componentWillMount will always run once he component is added
  // componentWillMount(){
  // }

  deleteArticle(){
    let data = this.props.abs;
    helper.deleteData(data);
  }


  render(){

      return (
          <div className="list-group-item col-md-12">
            <div className="col-md-12">
              <h5 className="col-md-12">{this.props.abs}</h5>
              <h6 className="col-md-8">{this.props.pub_date}</h6>
                <div className='btn-group col-md-4'>
                  <div className='pull-right article-buttons'>
                    <a onClick={this.deleteArticle.bind(this)}>
                      <button className="btn btn-default">Delete</button>
                    </a>
                    <a href={this.props.url} target="_blank">
                      <button className="btn btn-default">View Article</button>
                    </a>
                  </div>
                </div>
            </div>
          </div>
      )
  }
}
