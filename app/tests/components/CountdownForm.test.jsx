/**
 * Created by david on 5/26/17.
 */
import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';

import CountdownForm from 'CountdownForm';

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds are entered', () => {
    const spy = expect.createSpy();

    const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    const $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);

  });

  it('should not call onSetCountdown if invalid seconds are entered', () => {
    const spy = expect.createSpy();

    const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    const $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = 'asdf';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled(109);

  });
});