//@flow
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ disabled, imageSource, onPress, style }: Object) => {
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

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    alignItems: 'center'
  }
});

export default Button;
