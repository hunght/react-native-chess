//@flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextInput from './TextInput';

const styles = StyleSheet.create({
  text: {
    borderRadius: 15,
    backgroundColor: '#56445D',
    borderColor: '#FBB034',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TextRounded = ({
  style,
  text,
  placeholder = 'placeholder',
  ...props
}: Object) => {
  return (
    <View style={[styles.text, style]}>
      <TextInput
        style={{
          height: 30,
          color: 'white',
          marginHorizontal: 10,
          alignSelf: 'stretch',
        }}
        {...props}
        defaultValue={text}
        placeholder={placeholder}

        // placeholderTextColor={'red'}
      />
    </View>
  );
};
export default TextRounded;
