// @flow
import { merge } from 'ramda';

const initValue = {
  fen: ''
};

const reducer = (state = initValue, action) => {
  switch (action.type) {
    case 'SET_FEN_STRING':
      return merge(state, action.data);
    default:
      return state;
  }
};

export default reducer;
