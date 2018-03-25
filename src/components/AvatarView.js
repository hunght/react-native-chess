//@flow
import React from 'react';
import { ImageBackground, Image } from 'react-native';

const AvatarView = ({ url, style, size = 140 }: Object) => {
  return (
    <ImageBackground
      resizeMode="contain"
      source={require('src/assets/images/avatarBackground.png')}
      style={[
        {
          width: size,
          height: size,
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        },
        style,
      ]}
    >
      <Image
        resizeMode="contain"
        source={url ? url : require('src/assets/images/avatarDefault.png')}
        style={{
          width: size / 2,
          height: size / 2,
          borderRadius: size / 4,
          backgroundColor: 'lightgray',
        }}
      />
    </ImageBackground>
  );
};

export default AvatarView;
