//@flow
import { setState } from './actions';
import { Linking } from 'react-native';
import Home from './Home';
import fetch from 'isomorphic-fetch';

import {
  compose,
  withState,
  connect,
  lifecycle,
  withHandlers
} from 'recompose';
const HTTP_BASE_URL = 'https://en.lichess.org';
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
      // sets session cookie
      fetch(`${HTTP_BASE_URL}/account/info`).then(this.getDailyPuzzle);
    },

    getDailyPuzzle() {
      fetch(`${HTTP_BASE_URL}/training/daily`, {
        headers: {
          Accept: 'application/vnd.lichess.v2+json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
        .then((res) => res.json())
        .then((res) => {
          const { id, fen, color, initialMove, lines } = res.puzzle;

          setState({
            puzzleColor: color === 'white' ? 'w' : 'b',
            puzzleFen: fen,
            puzzleData: res.puzzle,
            ready: true
          });
        });
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
