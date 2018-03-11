// @flow
import { StackNavigator } from 'react-navigation';

import Home from './home/HomeContainer';
import ChooseBattle from './chooseBattle/ChooseBattleContainer';
import VSScreen from './chooseBattle/VSScreenContainer';
import Training from './training/Training';
import PlayerVsAI from './playerVsAI/PlayerVsAI';
import PlayerVsFriend from './playerVsFriend/PlayerVsFriend';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import UserInfo from './auth/UserInfo';

export const SignedOut = StackNavigator(
  {
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: 'Sign Up',
      },
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        title: 'Sign In',
      },
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'SignIn',
  }
);

const SignedIn = StackNavigator(
  {
    Home: { screen: Home },
    Training: { screen: Training },
    VSScreen: { screen: VSScreen },
    ChooseBattle: { screen: ChooseBattle },
    PlayerVsAI: { screen: PlayerVsAI },
    PlayerVsFriend: { screen: PlayerVsFriend },
    UserInfo: { screen: UserInfo },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false,
        },
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false,
        },
      },
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
    }
  );
};
