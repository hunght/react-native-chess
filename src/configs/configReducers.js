// @flow

import { combineReducers } from 'redux';

import app from '../containers/app/reducer';
import board from '../containers/board/reducer';
import home from '../containers/home/reducer';
import auth from '../containers/auth/reducer';

export default combineReducers({
  app,
  board,
  home,
  auth,
});
