import React from 'react';
import ReactDOM from 'react-dom';
import DisplayResults from './display_results.js';


class Results extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        data : this.props.data
      }
  }

  componentWillMount(){

    this.setState({
      data: this.props.data
    });
  }

  render(){
      let {data} = this.props
      let articles_container = []

      for (var i = 0; i < data.length; i++) {
        articles_container.push(
          <DisplayResults
            key={data[i].id}
            abs={data[i].abs}
            pub_date={data[i].pub_date}
            url={data[i].url}
        />)
      }

      return (
          <div className="list-group-item col-md-12">
            {articles_container}
          </div>
      )
  }
}
//props
module.exports = Results;
