import React from 'react';
import './Clock.css';
import styled from 'styled-components';

const ClockStyle = styled.div`
  background-color: black;
  color: #00FF00;
  width: 20rem;
  text-align: center;
  position: absolute;
  top: 30%;
  left: 50%;
  margin-left: -10rem;
  font-size: 3rem;
  padding: 1rem;
  border-radius: 0.5rem;
`;

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
      <ClockStyle>
      <div>{this.state.date.toLocaleTimeString()}</div>
      </ClockStyle>
    )
  }
}

export default Clock;
