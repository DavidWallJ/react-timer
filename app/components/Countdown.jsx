import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Contorls from 'Controls';

const Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    }
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
          // no break here.  we want it to follow through to the next case as well
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break
      }
    }
  },
  componentWillUpdate: function (nextProps, nextState) {

  },
  // This is like componentDidUpdate above except you get access to the next props and state
  // check values just before something updates
  componentWillMount: function () {
    console.log('componentWillMount');
  },
  // with componentWillMount we are getting access before everything has loaded in the DOM
  componentDidMount: function () {
    console.log('componentDidMount');
  },
  // with componentDidMount you do have access to DOM elements.  Things have rendered.
  componentWillUnmount: function () {
    console.log('componentDidUnmount');
    clearInterval(this.timer);
    this.timer = undefined;
  },
  // we switch tabs here in our app nav removing the countdown clock.  with componentWillUnmount we can target that change.
  startTimer: function () {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
        // you can use a ternary if statement within an object like above
      });

      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'});
      }

    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({countdownStatus: newStatus})
  },
  render: function () {
    const {count, countdownStatus} = this.state;
    const renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Contorls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      }
    };

    return (
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    )
  }
})

module.exports = Countdown
