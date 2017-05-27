/**
 * Created by david on 5/27/17.
 */
import React, { Component } from 'react';

const Controls  = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus)
    }
  },
  // onStatusChange is a function that returns a function.  the onClick handlers are a bit different here.  They pass-on the argument value.  The argument value is passed to 'newStatus'.  'newStatus' is saved on the props object.  This is called the currying pattern.
  render: function () {
    const {countdownStatus} = this.props;
    const renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      } else if (countdownStatus === 'paused') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    )

  }
});

module.exports = Controls;