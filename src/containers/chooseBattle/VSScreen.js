//@flow
import React from 'react';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { ImageButton } from '../../components';
import BackgroundView from '../../common/BackgroundView';

const { width } = Dimensions.get('window');

type BattleItemProps = {
  +imageName: string
};

const VSScreen = ({
  displayModal,
  puzzleColor,
  puzzleFen,
  puzzleData,
  navigation,
  ready
}: Object) => (
  <BackgroundView style={styles.container}>
    <ImageBackground
      resizeMode="contain"
      source={require('src/assets/images/VSAvatar.png')}
      style={styles.backgroundImage}
    >
      <ImageButton
        imageSource={require(`src/assets/images/avatarDefault.png`)}
        style={styles.avatarImage}
        onPress={() => displayModal(true)}
      />
      <ImageButton
        imageSource={require(`src/assets/images/avatarDefault.png`)}
        style={styles.avatarImage}
        onPress={() => displayModal(true)}
      />
    </ImageBackground>
  </BackgroundView>
);

VSScreen.navigationOptions = ({ navigation }) => ({
  title: 'Home'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 32
  },
  avatarImage: {
    marginTop: 20,
    width: 50,
    height: 50
  },
  backgroundImage: {
    width: width - 20,
    height: width - 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 65
  }
});

export default VSScreen;
