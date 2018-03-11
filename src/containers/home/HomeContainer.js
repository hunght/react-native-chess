//@flow
import { setState } from './actions';
import { Linking } from 'react-native';
import Home from './Home';
import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers } from 'recompose';

export default compose(
  connect(({ home }) => ({ ...home }), { setState }),
  withHandlers({
    displayModal: ({ navigation }) => () => {
      navigation.navigate('ChooseBattle');
    },
    showUserInfo: ({ navigation }) => () => {
      navigation.navigate('UserInfo');
    },
  }),
  lifecycle({
    componentDidMount() {
      Linking.getInitialURL().then(url => {
        if (url) {
          this.props.handleOpenURL(url);
        }
      });

      Linking.addEventListener('url', event =>
        this.props.handleOpenURL(event.url)
      );
    },
  })
)(Home);
