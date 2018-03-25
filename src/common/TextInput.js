//@flow
import React from 'react';
import { TextInput as TextInputNative, StyleSheet } from 'react-native';
import * as theme from './theme';

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.FONT,
    color: 'white',
    fontSize: 15,
    fontWeight: 'normal',
  },
});

const TextInput = ({ style, ...props }: Object) => {
  return <TextInputNative {...props} style={[styles.text, style]} />;
};
export default TextInput;
