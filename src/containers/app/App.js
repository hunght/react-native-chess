import React from 'react';
import { connect } from 'react-redux';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { AsyncStorage } from 'react-native';
import { createRootNavigator } from '../router';
import { setCurrentUser } from '../auth/actions';

import client from 'src/services/ApolloClient';
import { GET_ME } from 'src/services/graphqlAPI';
import { AUTH_TOKEN } from 'src/configs/constants';

const App = ({ checkedSignIn, signedIn }) => {
  // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
  if (!checkedSignIn) {
    return null;
  }

  const Layout = createRootNavigator(signedIn);
  return <Layout />;
};

export default compose(
  connect(state => ({ signedIn: state.auth.signedIn }), { setCurrentUser }),
  withState('checkedSignIn', 'setCheckedSignIn', false),
  withHandlers({
    checkSignIn: ({ setCurrentUser, setCheckedSignIn }) => async () => {
      try {
        const result = await client.query({
          query: GET_ME,
        });
        const token = await AsyncStorage.getItem(AUTH_TOKEN);
        setCurrentUser({ token, user: result.data.me });
        setCheckedSignIn(true);
      } catch (error) {
        console.log('error ===', error);
        setCheckedSignIn(true);
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.checkSignIn();
    },
  })
)(App);
