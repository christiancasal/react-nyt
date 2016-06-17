import React from 'react';
import ReactDOM from 'react-dom';

class Profile extends React.Component {
  render(){
    return (
        <h2>hello world</h2>
    );
  }
}
ReactDOM.render(<Profile />, document.getElementById('app'));
