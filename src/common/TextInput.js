//@flow
import React from 'react';
import { TextInput as TextInputNative, StyleSheet } from 'react-native';
import * as theme from './theme';

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.FONT,
  },
});

const TextInput = ({ style, ...props }: Object) => {
  return <TextInputNative {...props} style={[style, styles.text]} />;
};
export default TextInput;
