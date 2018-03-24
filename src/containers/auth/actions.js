//@flow

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = data => ({
  type: SET_CURRENT_USER,
  data,
});
