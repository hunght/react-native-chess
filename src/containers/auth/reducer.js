// @flow
import { filter } from 'ramda';

const initValue = {
  currentScreen: 'HomeStack',
  lastCurrentScreen: 'HomeStack',
};
const reducer = (state = initValue, action) => {
  switch (action.type) {
    case 'SET_CURRENT_SCREEN':
      return {
        ...state,
        lastCurrentScreen: state.currentScreen,
        currentScreen: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
