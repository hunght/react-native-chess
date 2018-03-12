import React from 'react';
import { View } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { onSignIn } from './actions';
const FBSDK = require('react-native-fbsdk');
const { LoginButton, AccessToken } = FBSDK;

export default ({ navigation }) => (
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
      <FormInput placeholder="Email address..." />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN IN"
        onPress={() => {
          onSignIn().then(() => navigation.navigate('SignedIn'));
        }}
      />
    </Card>
  </View>
);
