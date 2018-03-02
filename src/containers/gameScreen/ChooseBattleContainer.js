//@flow
import { setState } from './actions';
import { Linking } from 'react-native';
import Home from './Home';

import {
  compose,
  withState,
  connect,
  lifecycle,
  withHandlers
} from 'recompose';

const COLORS = ['white', 'random', 'black'];

export default compose(
  connect(({ home }) => ({ home }), { setState }),
  withHandlers({
    create: ({
      selectedColorIndex,
      selectedTimeIndex,
      modalDisplayed,
      totalMinutes,
      incrementSeconds,
      aiLevel,
      playVsAI,
      navigate
    }) => () => {
      const playConfig = JSON.stringify({
        variant: 1,
        timeMode: selectedTimeIndex,
        days: '2',
        time: `${totalMinutes}`,
        increment: `${incrementSeconds}`,
        level: `${aiLevel}`,
        color: COLORS[selectedColorIndex],
        mode: '0'
      });

      if (playVsAI) {
        navigate('PlayerVsAI', {
          playConfig,

          time: selectedTimeIndex === 1 ? totalMinutes * 60 : -1
        });
      } else {
        navigate('PlayerVsFriend', {
          playConfig,
          time: selectedTimeIndex === 1 ? totalMinutes * 60 : -1
        });
      }

      setState({ modalDisplayed: false });
    }
  }),
  lifecycle({
    componentDidMount() {
      Linking.getInitialURL().then((url) => {
        if (url) {
          this.handleOpenURL(url);
        }
      });

      Linking.addEventListener('url', (event) => this.handleOpenURL(event.url));
    },

    handleOpenURL(url) {
      const { navigate } = this.props.navigation;
      const id = url.replace('lichess599://', '');

      navigate('PlayerVsFriend', { gameId: id });
    },

    displayModal(playVsAI) {
      setState({
        modalDisplayed: true,
        playVsAI
      });
    }
  })
)(Home);
