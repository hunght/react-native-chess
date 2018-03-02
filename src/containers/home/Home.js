//@flow
import React from 'react';
import {
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import { UserHeader, ImageButton } from '../../components';
import BackgroundView from '../../common/BackgroundView';

const { width } = Dimensions.get('window');

const HomeScreen = ({
  selectedColorIndex,
  selectedTimeIndex,
  modalDisplayed,
  totalMinutes,
  incrementSeconds,
  aiLevel,
  playVsAI,
  displayModal,
  puzzleColor,
  puzzleFen,
  puzzleData,
  navigation,
  ready,
  setState,
  create,
  onPress
}: Object) => (
  <BackgroundView style={styles.container}>
    <UserHeader
      style={{
        height: 100
      }}
    />
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignSelf: 'stretch',
        alignItems: 'flex-end'
      }}
    >
      <Image
        resizeMode="contain"
        source={require('src/assets/images/settingButton.png')}
        style={styles.settingButton}
      />
    </TouchableOpacity>
    <View
      style={{
        marginBottom: 60
      }}
    >
      <View
        style={{
          flexDirection: 'row'
        }}
      >
        <ImageButton
          imageSource={require('src/assets/images/classic_chess.png')}
          style={styles.button}
          text={'Play with the machine'}
          onPress={() => displayModal(true)}
        />
        <ImageButton
          imageSource={require('src/assets/images/hidden_chess.png')}
          style={styles.button}
          text={'Play with the machine'}
          onPress={() => displayModal(true)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row'
        }}
      >
        <ImageButton
          imageSource={require('src/assets/images/puzzles_chess.png')}
          style={styles.button}
          text={'Play with the machine'}
          onPress={() => displayModal(true)}
        />
        <ImageButton
          imageSource={require('src/assets/images/random_chess.png')}
          style={styles.button}
          text={'Play with the machine'}
          onPress={() => displayModal(true)}
        />
      </View>
    </View>
  </BackgroundView>
);

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: 'Home'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  button: {
    width: width / 2,
    height: width / 2,
    margin: 5
  },
  settingButton: {
    marginRight: 20
  },
  modal: {
    padding: 16,
    backgroundColor: 'transparent'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    padding: 4
  },
  clockContainer: {
    backgroundColor: '#81a59a',
    padding: 16,
    marginTop: 16
  },
  board: {
    alignSelf: 'center'
  },
  puzzleContainer: {
    alignSelf: 'center'
  },
  puzzleHeadline: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    margin: 4
  },
  loadingContanier: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    paddingTop: 24,
    opacity: 0.4
  }
});

export default HomeScreen;
