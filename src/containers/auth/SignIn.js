import React from 'react';
import { View, AsyncStorage } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { AUTH_TOKEN } from 'src/configs/constants';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
const FBSDK = require('react-native-fbsdk');
const { LoginButton, AccessToken } = FBSDK;
import { compose, withState, withHandlers } from 'recompose';

const Login = ({ signIn, email, setEmail, password, setPassword }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card>
      <LoginButton
        publishPermissions={['publish_actions']}
        onLoginFinished={(error, result) => {
          if (error) {
            alert('login has error: ' + result.error);
          } else if (result.isCancelled) {
            alert('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              alert(data.accessToken.toString());
            });
          }
        }}
        onLogoutFinished={() => alert('logout.')}
      />
      <FormLabel>Email</FormLabel>
      <FormInput
        placeholder="Email address..."
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <FormLabel>Password</FormLabel>
      <FormInput
        secureTextEntry
        placeholder="Password..."
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN IN"
        onPress={() => {
          signIn();
        }}
      />
    </Card>
  </View>
);

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export default compose(
  graphql(LOGIN_MUTATION, { name: 'loginMutation' }),
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withHandlers({
    signIn: ({ navigation, loginMutation, email, password }) => async () => {
      console.log(email, password);
      const result = await loginMutation({
        variables: {
          email,
          password,
        },
      });
      const { token } = result.data.login;
      AsyncStorage.setItem(AUTH_TOKEN, token);
      navigation.navigate('SignedIn');
    },
  })
)(Login);
