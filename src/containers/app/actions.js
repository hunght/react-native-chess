//@flow
import { addNavigationHelpers, NavigationActions } from 'react-navigation';

export const setCurrentScreen = (title) => ({
  type: 'SET_CURRENT_SCREEN',
  payload: title
});
export const setDrawerOpen = () => ({
  type: 'SET_DRAWER_OPEN'
});

//TODO: only for demmo
const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'RegisterScreen' })]
});
let isResetRegisterScreen = false;

const setCurrentScreenEpic = (action$, store) =>
  action$.ofType('SET_CURRENT_SCREEN').subscribe((action) => {
    console.log('resetAction ===', action.payload);
    const navigation = addNavigationHelpers({
      dispatch: store.dispatch,
      state: store.getState().navigation
    });
    const app = store.getState().app;

    if (app.lastCurrentScreen !== app.currentScreen) {
      navigation.navigate(action.payload);

      if (app.currentScreen === 'MainScreen') {
        isResetRegisterScreen = true;
      } else if (
        app.currentScreen === 'RegisterScreenStack' &&
        isResetRegisterScreen
      ) {
        navigation.dispatch(resetAction);

        isResetRegisterScreen = false;
      }
    } else {
      navigation.navigate('DrawerClose');
    }
  });

const setDrawerOpenEpic = (action$, store) =>
  action$.ofType('SET_DRAWER_OPEN').subscribe((action) => {
    const navigation = addNavigationHelpers({
      dispatch: store.dispatch,
      state: store.getState().navigation
    });
    navigation.navigate('DrawerOpen');
  });
export const epics = [setCurrentScreenEpic, setDrawerOpenEpic];
