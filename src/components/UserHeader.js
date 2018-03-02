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
      <View style={styles.leftView}>
        <TextRounded style={styles.text}>{text}</TextRounded>
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
      <View style={styles.leftView}>
        <TextRounded style={styles.text}>{text}</TextRounded>
        <TextRounded style={styles.text}>{text}</TextRounded>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    height: 100,
    marginHorizontal: 10
  },
  leftView: {
    marginVertical: 20,
    flexDirection: 'column',
    justifyContent: 'space-between'
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
    width: 120
  }
});

export default UserHeader;
