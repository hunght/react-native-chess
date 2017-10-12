//@flow
import React from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { setCurrentScreen } from './actions';
import { connect } from 'react-redux';

import * as theme from '../../common/theme';

import Text from '../../common/Text';
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.BACKGROUND_COLOR,
    flex: 1,
    paddingTop: 20,
    flexDirection: 'column'
  }
});

const RowTitleItem = ({ title }) => (
  <View
    style={{
      marginTop: 1,
      height: 46,
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: 'rgba(0,0,0,0)'
    }}
  >
    <Text style={{ marginLeft: 20 }} fontSize={13} color="#516B7A">
      {title}
    </Text>
  </View>
);

const RowItem = ({ title, nameScreen, currentScreen, clickMenuItem }) => (
  <TouchableOpacity
    onPress={() => clickMenuItem && clickMenuItem(nameScreen)}
    style={{
      marginTop: 1,
      height: 46,
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor:
        currentScreen === nameScreen ? theme.ACTIVE_COLOR : '#2E3C44'
    }}
  >
    <Text
      style={{ marginLeft: 20 }}
      fontSize={16}
      color={theme.TEXT_LIGHT_COLOR}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

const Menu = ({ currentScreen, setCurrentScreen, navigation }) => {
  const clickMenuItem = (item) => {
    setCurrentScreen(item);
  };

  return (
    <ScrollView style={styles.container}>
      <RowItem
        title="Accounts"
        nameScreen="HomeStack"
        currentScreen={currentScreen}
        clickMenuItem={clickMenuItem}
      />
      <RowTitleItem title="MOVE MONEY" />
      <RowItem
        title="Transfer Money"
        nameScreen="MainScreen"
        currentScreen={currentScreen}
        // clickMenuItem={clickMenuItem}
      />

      <RowItem
        title="Payments"
        nameScreen="Page4"
        currentScreen={currentScreen}
        // clickMenuItem={clickMenuItem}
      />
      <RowItem
        title="Wire Transfer"
        nameScreen="Page4"
        currentScreen={currentScreen}
        // clickMenuItem={clickMenuItem}
      />

      <RowTitleItem title="APPLY FOR" />
      <RowItem
        title="Credit Card"
        nameScreen="RegisterScreenStack"
        currentScreen={currentScreen}
        clickMenuItem={clickMenuItem}
      />
      <RowItem
        title="Home Equity Loan"
        nameScreen="TermScreen"
        currentScreen={currentScreen}
        // clickMenuItem={clickMenuItem}
      />
      <RowItem
        title="Mortgage"
        nameScreen="Page11"
        currentScreen={currentScreen}
        // clickMenuItem={clickMenuItem}
      />
      <RowItem
        title="Car Loan"
        nameScreen="Page11"
        currentScreen={currentScreen}
        // clickMenuItem={clickMenuItem}
      />
      <RowItem
        title="Savings Account"
        nameScreen="Page11"
        currentScreen={currentScreen}
        // clickMenuItem={clickMenuItem}
      />

      <RowTitleItem title="CONNECT" />
      <RowItem
        title="Find Branch"
        nameScreen="CongratulationScreen"
        currentScreen={currentScreen}
        // clickMenuItem={clickMenuItem}
      />
      <View
        style={{
          flex: 1,
          marginTop: 13,
          alignSelf: 'stretch',
          alignItems: 'flex-end',
          justifyContent: 'flex-end'
        }}
      />
    </ScrollView>
  );
};

export default connect(
  (state) => ({
    currentScreen: state.app.currentScreen
  }),
  { setCurrentScreen }
)(Menu);
