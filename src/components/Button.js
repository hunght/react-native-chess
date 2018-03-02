//@flow
import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';

const Button = ({ text, disabled, onPress, style }: Object) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={[styles.button, style]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 3,
    backgroundColor: 'green',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 14,
    marginVertical: 16
  }
});

export default Button;
