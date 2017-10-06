// @flow

import { combineReducers } from 'redux';

import app from '../containers/app/reducer';
import board from '../containers/board/reducer';

export default combineReducers({
  app,
  board
});
