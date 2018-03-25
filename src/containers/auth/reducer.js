// @flow
import { filter } from 'ramda';
import { SET_CURRENT_USER } from './actions';

const initValue = {
  token: null,
  signedIn: false,
};
const reducer = (state = initValue, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        ...action.data,
        signedIn: true,
      };
    default:
      return state;
  }
};

export default reducer;
