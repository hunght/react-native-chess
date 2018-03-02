// @flow
import { StackNavigator } from 'react-navigation';

import Home from '../home/HomeContainer';
import ChooseBattle from '../chooseBattle/ChooseBattleContainer';
import VSScreen from '../chooseBattle/VSScreenContainer';
import Training from '../training/Training';
import PlayerVsAI from '../playerVsAI/PlayerVsAI';
import PlayerVsFriend from '../playerVsFriend/PlayerVsFriend';

const Chess = StackNavigator(
  {
    Home: { screen: Home },
    Training: { screen: Training },
    VSScreen: { screen: VSScreen },
    ChooseBattle: { screen: ChooseBattle },
    PlayerVsAI: { screen: PlayerVsAI },
    PlayerVsFriend: { screen: PlayerVsFriend }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);
export default Chess;
