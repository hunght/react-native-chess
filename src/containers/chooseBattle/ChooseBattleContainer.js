//@flow
import { setState } from './actions';
import { Linking } from 'react-native';
import ChooseBattle from './ChooseBattle';
import { connect } from 'react-redux';
import { compose, withState, lifecycle, withHandlers } from 'recompose';

export default compose(
  connect(({ home }) => ({ home }), { setState }),
  withHandlers({
    displayModal: ({ navigation }) => () => {
      navigation.navigate('VSScreen');
    }
  }),
  lifecycle({
    componentDidMount() {}
  })
)(ChooseBattle);
