//@flow
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
/*
 * action types
 */

export const SET_CURRENT_SCREEN = 'SET_CURRENT_SCREEN';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const setCurrentScreen = (title) => ({
  type: SET_CURRENT_SCREEN,
  payload: title
});
export const setDrawerOpen = () => ({
  type: 'SET_DRAWER_OPEN'
});
