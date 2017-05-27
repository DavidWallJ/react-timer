/**
 * Created by david on 5/27/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import Controls from 'Controls';

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause when started', () => {
      const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      const $el = $(ReactDOM.findDOMNode(controls));
      const $pauseButton = $el.find('button:contains(Pause)');
      // find a button who's text value is 'Pause'

      expect($pauseButton.length).toBe(1);
    });

    it('should render start when paused', () => {
      const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      const $el = $(ReactDOM.findDOMNode(controls));
      const $startButton = $el.find('button:contains(Start)');
      // find a button who's text value is 'Pause'

      expect($startButton.length).toBe(1);
    });
  });
});