import React, { Component } from 'react';
import Nav from 'Nav';

const MAIN = (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav/>
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = MAIN;
