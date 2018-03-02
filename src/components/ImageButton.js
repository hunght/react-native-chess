//@flow
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const ImageButton = ({ disabled, imageSource, onPress, style }: Object) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Image
        resizeMode="contain"
        source={imageSource}
        style={[styles.button, style]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    alignItems: 'center'
  }
});

export default ImageButton;
