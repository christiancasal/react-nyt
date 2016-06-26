import React from 'react';
import Header from '../header/header.js';
import helper from '../../utils/helper.js';
import SavedResults from './saved_results.js';

export default class Saved extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      data : []
    };

  }

  componentWillMount(){
    // this.getArticles.bind(this);
    this.getArticles()

  }

  getArticles(){
    let saved_articles = [];

    helper.getData((function cb(res){
      for (var i = 0; i < res.length; i++) {

        let obj = {
            res_id: res[i]._id,
            abs: res[i].title,
            pub_date: res[i].date,
            url: res[i].url
        }

        saved_articles.push(obj);
      }
      this.setState({
        data: saved_articles
      });

    }).bind(this))
  }

  render(){
    let {data} = this.state;
    let container = [];

    for (var i = 0; i < data.length; i++) {
      container.push(<SavedResults
        key={data[i].res_id}
        abs={data[i].abs}
        pub_date={data[i].pub_date}
        url={data[i].url}
        />)
    }

    return (
        <div className="container">
          <Header />
          { container }
        </div>
    )
  }
}
