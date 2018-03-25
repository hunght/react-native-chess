//@flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  text: {
    borderRadius: 10,
    backgroundColor: '#56445D',
    borderColor: '#FBB034',
    borderWidth: 1,
  },
});

const TextRounded = ({ style, text = 'name' }: Object) => {
  return (
    <View style={[styles.text, style]}>
      <Text style={{ marginLeft: 5, height: 20, color: 'white' }}>{text}</Text>
    </View>
  );
};
export default TextRounded;
