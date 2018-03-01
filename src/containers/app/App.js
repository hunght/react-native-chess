// @flow
import { StackNavigator } from 'react-navigation';

import Home from '../home/HomeContainer';
import Training from '../training/Training';
import PlayerVsAI from '../playerVsAI/PlayerVsAI';
import PlayerVsFriend from '../playerVsFriend/PlayerVsFriend';

const Chess = StackNavigator(
  {
    Home: { screen: Home },
    Training: { screen: Training },
    PlayerVsAI: { screen: PlayerVsAI },
    PlayerVsFriend: { screen: PlayerVsFriend }
  },
  {
    mode: 'modal'
  }
);
export default Chess;
