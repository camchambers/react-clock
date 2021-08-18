import React from 'react';
import './Clock.css';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    // Set up a timer whenever the clock is rendered to the DOM
    // for the first time (mounted)
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    // Clear the timer whenever the clock is removed from 
    // the dom (unmount)
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({ date: new Date() });
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
