//@flow
import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  Image,
  View,
  StyleSheet
} from 'react-native';
import TextRounded from 'src/common/TextRounded';
const UserHeader = ({
  text,
  disabled,
  onPress,
  avatarSource,
  style
}: Object) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.button}>
        <TextRounded style={styles.text}>{text}</TextRounded>
      </View>

      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <ImageBackground
          resizeMode="contain"
          source={require('src/assets/images/avatarBackground.png')}
          style={styles.backgroundImage}
        >
          <Image
            resizeMode="contain"
            source={
              avatarSource
                ? avatarSource
                : require('src/assets/images/avatarDefault.png')
            }
            style={styles.avatarImage}
          />
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    height: 100
  },
  button: {
    borderRadius: 3,
    alignItems: 'center'
  },
  avatarImage: {
    width: 50,
    height: 50
  },
  backgroundImage: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 14,
    width: 120,
    marginVertical: 16
  }
});

export default UserHeader;
