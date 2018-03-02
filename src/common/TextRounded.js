//@flow
import React from 'react';
import { Text as TextNative, StyleSheet } from 'react-native';
import * as theme from './theme';

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.FONT
  }
});

const TextRounded = ({ style, ...props }: Object) => {
  return <TextNative {...props} style={[style, styles.text]} />;
};
export default TextRounded;
