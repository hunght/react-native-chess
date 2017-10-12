//@flow
import React from 'react';
import { connect } from 'react-redux';

import {
  StackNavigator,
  DrawerNavigator,
  addNavigationHelpers
} from 'react-navigation';

import Menu from './Menu';
import WrappedHeader from './WrappedHeader';

// Pages
import Home from '../home/Home';
import ChooseBattle from '../chooseBattle/ChooseBattle';
import Training from '../training/Training';
import PlayerVsAI from '../playerVsAI/PlayerVsAI';
import PlayerVsFriend from '../playerVsFriend/PlayerVsFriend';

import * as theme from '../../common/theme';

const HomeStack = StackNavigator(
  {
    Home: {
      screen: WrappedHeader(Home)
    },
    ChooseBattle: {
      screen: WrappedHeader(ChooseBattle)
    },
    Training: { screen: WrappedHeader(Training) },
    PlayerVsAI: { screen: WrappedHeader(PlayerVsAI) },
    PlayerVsFriend: { screen: WrappedHeader(PlayerVsFriend) }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
);

export const SlideMenu = DrawerNavigator(
  {
    HomeStack: {
      screen: HomeStack
    }
  },
  {
    initialRouteName: 'HomeStack',
    drawerWidth: 250,
    drawerPosition: 'left',
    contentComponent: (props) => <Menu {...props} />
  }
);

const AppWithNavigationState = ({ dispatch, navigation }) => (
  <SlideMenu
    navigation={addNavigationHelpers({ dispatch, state: navigation })}
  />
);

export default connect((state) => ({
  navigation: state.navigation
}))(AppWithNavigationState);
