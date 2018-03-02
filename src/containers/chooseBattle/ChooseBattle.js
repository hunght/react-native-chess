//@flow
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { ImageButton } from '../../components';
import BackgroundView from '../../common/BackgroundView';
import Carousel from 'react-native-snap-carousel';

const battleItems = [
  { prize: 50, imageName: 'prize50' },
  { prize: 200, imageName: 'prize200' }
];
const horizontalMargin = 20;

const sliderWidth = Dimensions.get('window').width;
const slideWidth = sliderWidth * 0.5;
const itemWidth = slideWidth + horizontalMargin * 2;

type BattleItemProps = {
  +imageName: string
};

const BattleItem = ({ imageName = '', displayModal }: BattleItemProps) => (
  <View style={styles.slide}>
    <View style={styles.slideInnerContainer}>
      <ImageButton
        imageSource={require(`src/assets/images/prize50.png`)}
        style={styles.imageButton}
        onPress={() => displayModal(true)}
      />
    </View>
  </View>
);

const ChooseBattle = ({
  displayModal,
  puzzleColor,
  puzzleFen,
  puzzleData,
  navigate,
  ready
}: Object) => (
  <BackgroundView style={styles.container}>
    <Carousel
      data={battleItems}
      renderItem={item => (
        <BattleItem item={item} displayModal={displayModal} />
      )}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
    />
  </BackgroundView>
);

ChooseBattle.navigationOptions = ({ navigation }) => ({
  title: 'Home'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 32
  },
  slide: {
    width: itemWidth,
    flex: 1,
    alignSelf: 'stretch',
    paddingHorizontal: horizontalMargin
  },
  slideInnerContainer: {
    width: slideWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  imageButton: {
    width: slideWidth
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

export default ChooseBattle;
