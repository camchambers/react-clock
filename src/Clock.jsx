import React from 'react';
import './Clock.css';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  render(){
    return(
      <div>
      <div>{this.state.date.toLocaleTimeString()}</div>
      </div>
    )
  }
}

export default Clock;
