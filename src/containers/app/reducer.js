// @flow
import { merge } from 'ramda';

const initValue = {
  response: null
};

const reducer = (state = initValue, action) => {
  switch (action.type) {
    case 'GET_CHAPTER_ASYNC':
      return merge(state, action.data);
    default:
      return state;
  }
};

export default reducer;
