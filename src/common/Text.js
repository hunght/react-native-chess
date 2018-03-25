//@flow
import React from 'react';
import { Text as TextNative, StyleSheet } from 'react-native';
import * as theme from './theme';

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.FONT,
    color: 'white',
    fontSize: 15,
    fontWeight: 'normal',
  },
});

const Text = ({ style, ...props }: Object) => {
  return <TextNative {...props} style={[styles.text, style]} />;
};
export default Text;
