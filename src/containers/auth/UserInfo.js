import React from 'react';
import { View } from 'react-native';
import { onSignIn } from './actions';
import Text from '../../common/Text';
export default ({ navigation, auth }) => (
  <View style={{ paddingVertical: 20 }}>
    <Text>{auth}</Text>
  </View>
);
