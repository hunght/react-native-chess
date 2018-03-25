import React from 'react';
import { AUTH_TOKEN, FACEBOOK_PERMISSIONS } from 'src/configs/constants';
import { withLoadingComponent } from 'src/components/LoadingView';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  View,
  StyleSheet,
  AsyncStorage,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import TextInputRounded from 'src/common/TextInputRounded';
import BackgroundView from '../../common/BackgroundView';
import Text from '../../common/Text';
import { Button } from '../../components';
import { setCurrentUser } from './actions';
const FBSDK = require('react-native-fbsdk');
const { LoginButton, AccessToken } = FBSDK;

const Login = ({
  email,
  password,
  avatarSource,
  signIn,
  setEmail,
  setPassword,
  navigation,
}: Object) => (
  <BackgroundView style={styles.container}>
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground
            resizeMode="contain"
            source={require('src/assets/images/avatarBackground.png')}
            style={styles.backgroundImage}
          >
            <Image
              resizeMode="contain"
              source={
                avatarSource
                  ? avatarSource
                  : require('src/assets/images/avatarDefault.png')
              }
              style={styles.avatarImage}
            />
          </ImageBackground>
          <LoginButton
            publishPermissions={FACEBOOK_PERMISSIONS}
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
            style={{
              marginTop: 10,
              marginHorizontal: 60,
              alignSelf: 'stretch',
              height: 30,
              borderRadius: 30,
            }}
            onLogoutFinished={() => alert('logout.')}
          />
          <Text style={{ marginTop: 10 }}>-- or connect using --</Text>
          <TextInputRounded
            style={styles.text}
            keyboardType={'email-address'}
            defaultValue={email}
            onChangeText={text => {
              setEmail(text);
            }}
          />
          <TextInputRounded
            style={styles.text}
            secureTextEntry={true}
            defaultValue={password}
            onChangeText={text => {
              setPassword(text);
            }}
          />
          <Button
            style={{
              marginTop: 10,
              marginHorizontal: 60,
              alignSelf: 'stretch',
              height: 30,
              borderRadius: 30,
              backgroundColor: '#FBB034',
            }}
            text={'Sign in'}
            onPress={() => signIn()}
          />

          <Button
            style={{
              marginTop: 10,
              alignSelf: 'stretch',
              height: 30,
              marginHorizontal: 60,
              borderRadius: 30,
              backgroundColor: 'transparent',
            }}
            text={'Forgot login?'}
            onPress={() => {}}
          />
          <Text style={{ marginTop: 10 }}>-- or register new --</Text>
          <Button
            style={{
              marginTop: 10,

              alignSelf: 'stretch',
              height: 30,
              borderRadius: 30,
              marginHorizontal: 60,
              backgroundColor: '#FBB034',
            }}
            text={'Sign Up'}
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  </BackgroundView>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    flex: 1,
  },

  avatarImage: {
    width: 100,
    height: 100,
  },
  backgroundImage: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  text: {
    height: 30,
    alignSelf: 'stretch',
    marginHorizontal: 60,
    marginTop: 10,
    borderRadius: 30,
  },
});

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export default compose(
  connect(null, { setCurrentUser }),
  graphql(LOGIN_MUTATION, { name: 'loginMutation' }),
  withLoadingComponent,
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withHandlers({
    signIn: ({
      loginMutation,
      email,
      password,
      setCurrentUser,
    }) => async () => {
      try {
        const result = await loginMutation({
          variables: {
            email,
            password,
          },
        });
        const { token } = result.data.login;
        await AsyncStorage.setItem(AUTH_TOKEN, token);
        setCurrentUser(result.data.login);
      } catch (error) {
        alert(error);
      }
    },
  })
)(Login);
