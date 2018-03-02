// @flow

import { combineReducers } from 'redux';

import app from '../containers/app/reducer';
import board from '../containers/board/reducer';
import home from '../containers/home/reducer';
import App from '../containers/app/App';

const navigation = (state, action) => {
  const newState = App.router.getStateForAction(action, state);
  return newState || state;
};
export default combineReducers({
  app,
  board,
  home,
  navigation
});
