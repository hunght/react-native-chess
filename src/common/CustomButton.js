//@flow
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as theme from './theme';
const CustomButton = ({
  style = {},
  disabled,
  title,
  color,
  fontSize,
  onPress,
  ...props
}: Object) => {
  // console.log("style ===", style);
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Text
        {...props}
        style={{
          ...style,
          color: color && !disabled ? color : theme.TEXT_COLOR,
          fontSize: fontSize ? fontSize : theme.FONT_SIZE_MEDIUM,
          fontFamily: theme.FONT,
          backgroundColor: 'rgba(0,0,0,0)'
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
