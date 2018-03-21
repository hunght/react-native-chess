//@flow
import { AsyncStorage } from 'react-native';

export const SET_CURRENT_SCREEN = 'SET_CURRENT_SCREEN';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const USER_KEY = 'auth-demo-key';

export const onSignIn = () => AsyncStorage.setItem(USER_KEY, 'true');

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

export const setCurrentScreen = title => ({
  type: SET_CURRENT_SCREEN,
  payload: title
});
export const setDrawerOpen = () => ({
  type: 'SET_DRAWER_OPEN'
});
