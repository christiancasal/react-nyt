import React from 'react';
import Header from '../header.js';
import helper from '../../utils/helper.js';
import SavedResults from './saved_results.js';

class Saved extends React.Component{
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
    let saved_articles = [];

    helper.getData((function cb(res){
      this.props = res
      for (var i = 0; i < res.length; i++) {
        console.log('this is data');
        console.log(this);
        saved_articles.push(
          <SavedResults
              key={this.props[i]._id}
              abs={this.props[i].title}
              pub_date={this.props[i].date}
              url={this.props[i].url}
              />)
          console.log(saved_articles)
      }
    }).bind(this))

    return (
        <div className="container">
          <Header />
          <SavedResults/>
            { saved_articles }
        </div>
    )
  }
}

module.exports = Saved;
