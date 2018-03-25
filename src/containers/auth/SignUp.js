import React from 'react';
import { AUTH_TOKEN, FACEBOOK_PERMISSIONS } from 'src/configs/constants';
import { graphql } from 'react-apollo';
import { withLoadingComponent } from 'src/components/LoadingView';
import { connect } from 'react-redux';
import { setCurrentUser } from './actions';
import gql from 'graphql-tag';

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

const FBSDK = require('react-native-fbsdk');
const { LoginButton, AccessToken } = FBSDK;

const SignUp = ({
  email,
  password,
  avatarSource,
  signUp,
  setEmail,
  setPassword,
  name,
  onFacebookFinished,
  setName,
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
            onLoginFinished={onFacebookFinished}
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
            defaultValue={name}
            onChangeText={text => {
              setName(text);
            }}
          />
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
            text={'Sign up'}
            onPress={() => signUp()}
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

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

export default compose(
  graphql(SIGNUP_MUTATION, { name: 'signupMutation' }),
  withLoadingComponent,
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withState('name', 'setName', ''),
  connect(null, { setCurrentUser }),
  withHandlers({
    onFacebookFinished: () => (error, result) => {
      if (error) {
        alert('login has error: ' + result.error);
      } else if (result.isCancelled) {
        alert('login is cancelled.');
      } else {
        AccessToken.getCurrentAccessToken().then(data => {
          alert(data.accessToken.toString());
        });
      }
    },
    signUp: ({
      navigation,
      signupMutation,
      email,
      password,
      name,
      setCurrentUser,
    }) => async () => {
      const result = await signupMutation({
        variables: {
          email,
          password,
          name,
        },
      });
      const { token } = result.data.signup;
      setCurrentUser(result.data.signup);
      await AsyncStorage.setItem(AUTH_TOKEN, token);
      navigation.navigate('SignedIn');
    },
  })
)(SignUp);
