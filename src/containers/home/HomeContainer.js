//@flow
import { setState } from './actions';
import { Linking } from 'react-native';
import Home from './Home';
import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers } from 'recompose';

const COLORS = ['white', 'random', 'black'];

export default compose(
  connect(({ home }) => ({ ...home }), { setState }),
  withHandlers({
    displayModal: ({ setState }) => (playVsAI) => {
      setState({
        modalDisplayed: true,
        playVsAI
      });
    },
    create: ({
      selectedColorIndex,
      selectedTimeIndex,
      totalMinutes,
      incrementSeconds,
      aiLevel,
      playVsAI,
      navigation
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
        navigation.navigate('PlayerVsAI', {
          playConfig,

          time: selectedTimeIndex === 1 ? totalMinutes * 60 : -1
        });
      } else {
        navigation.navigate('PlayerVsFriend', {
          playConfig,
          time: selectedTimeIndex === 1 ? totalMinutes * 60 : -1
        });
      }

      setState({ modalDisplayed: false });
    },
    handleOpenURL: ({ navigation }) => (url) => {
      const id = url.replace('lichess599://', '');
      navigation.navigate('PlayerVsFriend', { gameId: id });
    }
  }),
  lifecycle({
    componentDidMount() {
      Linking.getInitialURL().then((url) => {
        if (url) {
          this.props.handleOpenURL(url);
        }
      });

      Linking.addEventListener('url', (event) =>
        this.props.handleOpenURL(event.url)
      );
    }
  })
)(Home);
