//@flow
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { addNavigationHelpers } from 'react-navigation';
import { TouchableOpacity, Image, View } from 'react-native';
import { connect } from 'react-redux';
import * as theme from '../common/theme';
import { setDrawerOpen } from '../containers/app/actions';

const ButtonMenu = ({ setDrawerOpen, ...props }) => (
  <View {...props}>
    <TouchableOpacity onPress={() => setDrawerOpen()}>
      <Icon
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
        name="ios-menu"
        size={35}
        color={theme.BUTTON_MENU_COLOR}
      />
    </TouchableOpacity>
  </View>
);

export default connect(null, { setDrawerOpen })(ButtonMenu);
