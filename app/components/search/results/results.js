import React from 'react';
import ReactDOM from 'react-dom';
// import helper from '../../../utils/helper.js';

class Results extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        data : this.props.data
      }
  }

  componentWillMount(){

    this.addResults.bind(this);

    this.setState({
      data: this.props.data
    });
  }
  //TODO create a render results fucntion to catch all the results from the api call, then pass it into the render function. map it over the state.data
  renderHome(){

  }

  addResults(){
    console.log('hello im in render results');
    console.log(this);

    let {data} = this.props

    console.log(data);

    if(data.length === 0){

    }
    // for (var i = 0; i < this.state.data.length; i++) {
    //   console.log(this.state.data[i])
    // }
  }
//make render function as small as possible

  render(){
      return (
          <div className="list-group-item col-md-12">
            <div className="col-md-12">
              <h5 className="col-md-12">{console.log('this is results.js prop data')}{console.log(this.props.data)}
              {console.log('this is results.js state data')}{console.log(this.state.data)}</h5>
              <h6 className="col-md-8">This will be the ...</h6>
                <div className='btn-group col-md-4'>
                  <a className='pull-right'>
                    <button className="btn btn-default">Save</button>
                    <button className="btn btn-default">View Article</button>
                  </a>
                </div>
            </div>
            {console.log('add this')}
            {this.addResults()}
          </div>
      )
  }
}
//props
module.exports = Results;
