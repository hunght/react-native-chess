//@flow
import React from 'react';
import {
  ActivityIndicator,
  Slider,
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

import { Button, Board } from '../../components';

const COLORS = ['white', 'random', 'black'];

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
  navigate,
  ready,
  setState
}: Object) => (
  <View style={styles.container}>
    <View style={styles.puzzleContainer}>
      <Text style={styles.puzzleHeadline}>Puzzle of the day</Text>
      <TouchableOpacity onPress={() => navigate('Training', { puzzleData })}>
        <Board
          style={styles.board}
          size={200}
          color={puzzleColor}
          fen={puzzleFen}
          shouldSelectPiece={() => false}
        />
      </TouchableOpacity>
    </View>
    <Button
      style={styles.button}
      text={'Play with the machine'}
      onPress={() => displayModal(true)}
    />
    <Button
      style={styles.button}
      text={'Play with a friend'}
      onPress={() => displayModal(false)}
    />
    {ready && (
      <View style={styles.loadingContanier}>
        <ActivityIndicator animation size={'large'} color={'green'} />
      </View>
    )}
  </View>
);

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: 'Home'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 32
  },
  button: {
    marginTop: 16
  },
  modalButton: {
    marginTop: 16,
    backgroundColor: '#D85000'
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
