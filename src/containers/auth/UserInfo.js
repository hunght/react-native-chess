import React from 'react';
import { AUTH_TOKEN, FACEBOOK_PERMISSIONS } from 'src/configs/constants';
import { withLoadingComponent } from 'src/components/LoadingView';
import AvatarView from 'src/components/AvatarView';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';
import {
  KeyboardAvoidingView,
  View,
  StyleSheet,
  AsyncStorage,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import TextInput from 'src/common/TextInput';
import BackgroundView from '../../common/BackgroundView';
import Text from '../../common/Text';
import { Button } from '../../components';
import { setCurrentUser } from './actions';
const FBSDK = require('react-native-fbsdk');
const { LoginButton, AccessToken } = FBSDK;

const UserInfo = ({
  email,
  password,
  signIn,
  setEmail,
  location,
  setLocation,
  country,
  setCountry,
  setPassword,
  onFacebookFinished,
  user,
  navigation,
}: Object) => (
  <BackgroundView style={styles.container}>
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <AvatarView url={user.avatar} />
          <View style={styles.basicInfoView}>
            <Text style={{ marginTop: 10, opacity: 0.5, fontWeight: 'bold' }}>
              Basic Info
            </Text>

            <View style={styles.rowView}>
              <Text style={{ marginTop: 10 }}> Email:</Text>
              <TextInput
                style={styles.text}
                keyboardType={'email-address'}
                defaultValue={email}
                onChangeText={text => {
                  setEmail(text);
                }}
              />
            </View>
            <View style={styles.rowView}>
              <Text style={{ marginTop: 10 }}> Location:</Text>
              <TextInput
                style={styles.text}
                defaultValue={location}
                onChangeText={text => {
                  setLocation(text);
                }}
              />
            </View>
            <View style={styles.rowView}>
              <Text style={{ marginTop: 10 }}> Country:</Text>
              <TextInput
                style={styles.text}
                defaultValue={country}
                onChangeText={text => {
                  setCountry(text);
                }}
              />
            </View>

            <LoginButton
              publishPermissions={FACEBOOK_PERMISSIONS}
              onLoginFinished={onFacebookFinished}
              style={styles.facebookLoginButton}
              onLogoutFinished={() => alert('logout.')}
            />
            <TextInput
              style={styles.text}
              secureTextEntry={true}
              defaultValue={password}
              onChangeText={text => {
                setPassword(text);
              }}
            />
          </View>

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
    flex: 1,
  },
  rowView: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderBottomColor: '#FFDD00',
    borderBottomWidth: 0.5,
    marginHorizontal: 10,
  },
  facebookLoginButton: {
    marginTop: 10,
    marginHorizontal: 60,
    alignSelf: 'stretch',
    height: 30,
    borderRadius: 30,
  },
  basicInfoView: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#56445D',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: '#FFDD00',
    borderWidth: 0.5,
    marginHorizontal: 30,
  },
  avatarImage: {
    width: 70,
    height: 70,
  },
  backgroundImage: {
    width: 140,
    height: 140,
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
  connect(
    state => ({
      user: state.auth.user,
    }),
    { setCurrentUser }
  ),
  graphql(LOGIN_MUTATION, { name: 'loginMutation' }),
  withLoadingComponent,
  withState('email', 'setEmail', ({ user }) => user.email),
  withState('country', 'setCountry', ({ user }) => user.country),
  withState('location', 'setLocation', ({ user }) => user.location),
  withState('password', 'setPassword', '000000'),
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
)(UserInfo);
