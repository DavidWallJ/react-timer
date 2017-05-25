/**
 * Created by david on 5/24/17.
 */
import React, { Component } from 'react';
import { Link, IndexLink} from 'react-router';

const NAV = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Weather App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
              {/*this one is IndexLink instead of Link because of the way weather is nested in the routing.  Without doing this the active class stuff doesn't work right*/}
            </li>
            <li>
              <Link to="/countdown" activeClassName="active-link">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="#">David J. Wall</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = NAV;


// you are here 'add the nav bar' 5 mins in