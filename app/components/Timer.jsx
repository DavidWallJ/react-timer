import React from 'react';
import Clock from 'Clock';
import TimerControls from 'TimerControls';

const Timer = React.createClass({
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
  startTimer: function () {
    this.timer = setInterval(() => {
      const newCount = this.state.count + 1;
      this.setState({
        count: newCount
        // you can use a ternary if statement within an object like above
      });

      if (newCount === 10) {
        this.setState({countdownStatus: 'stopped'});
      }

    }, 1000);
  },
  handleStatusChange: function (newStatus) {
    this.setState({countdownStatus: newStatus})
  },
  render: function () {
    return (
    <div>
      <h1 className="page-title">Timer App</h1>
      <Clock totalSeconds={this.state.count}/>
      <TimerControls countdownStatus={this.state.countdownStatus} onStatusChange={this.handleStatusChange}/>
    </div>
    )
  }
});

module.exports = Timer;
