/**
 * Created by david on 5/26/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import Countdown from 'Countdown';

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown);
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and countdown', (done) => {
      const countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
        // we've added done as a argument and called it here to let mocha know that we are running and asynchronous test
      }, 1001)
    });

    it('should not allow count to go below 0', (done) => {
      const countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
        // we've added done as a argument and called it here to let mocha know that we are running and asynchronous test
      }, 3000)
    });

  });
})