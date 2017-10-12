// @flow

import { combineReducers } from 'redux';

import app from '../containers/app/reducer';
import board from '../containers/board/reducer';
import home from '../containers/home/reducer';
import { SlideMenu } from '../containers/app/SlideMenu';

const navigation = (state, action) => {
  const newState = SlideMenu.router.getStateForAction(action, state);
  return newState || state;
};
export default combineReducers({
  app,
  board,
  home,
  navigation
});
