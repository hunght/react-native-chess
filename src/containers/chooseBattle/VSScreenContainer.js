//@flow
import { setState } from './actions';
import VSScreen from './VSScreen';
import { connect } from 'react-redux';
import { compose, withState, lifecycle, withHandlers } from 'recompose';
const COLORS = ['white', 'random', 'black'];
export default compose(
  connect(({ home }) => ({ home }), { setState }),
  withHandlers({
    displayModal: ({ navigation }) => () => {
      navigation.navigate('VSScreen');
      const playConfig = JSON.stringify({
        variant: 1,
        timeMode: 0,
        days: '2',
        time: 5,
        increment: 8,
        level: 3,
        color: COLORS[1],
        mode: '0'
      });

      navigation.navigate('PlayerVsAI', {
        playConfig,
        time: 1 ? 5 * 60 : -1
      });
    }
  }),
  lifecycle({
    componentDidMount() {}
  })
)(VSScreen);
