// @flow
import { merge } from 'ramda';
import type { HomeState, HomeAction } from './type';

const initValue = {
  ready: false,
  modalDisplayed: false,
  selectedColorIndex: 1,
  selectedTimeIndex: 0,
  totalMinutes: 5,
  incrementSeconds: 8,
  aiLevel: 3,
  playVsAI: false,
  puzzleFen: 'wrong',
  puzzleColor: 'w',
  boardType: 'NORMAL_CHESS',
  board: {},
};

const reducer = (state: HomeState = initValue, action: HomeAction) => {
  switch (action.type) {
    case 'SET_STATE':
      return merge(state, action.payload);

    default:
      return state;
  }
};

export default reducer;
