// @flow
import { filter } from 'ramda';
import { SET_CURRENT_USER } from './actions';

const initValue = {
  checkedSignIn: false,
  token: null,
};
const reducer = (state = initValue, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default reducer;
