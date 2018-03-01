//@flow

import React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonMenu from '../../components/ButtonMenu';
import * as theme from '../../common/theme';
import Text from '../../common/Text';
import BackgroundView from '../../common/BackgroundView';

const WrappedHeader = (ComponentChildren, isShowMenu = true) => (props) => (
  <BackgroundView
    style={{
      flex: 1
    }}
  >
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row'
      }}
    >
      {isShowMenu && (
        <ButtonMenu
          style={{
            marginLeft: 28,
            marginBottom: 0,
            justifyContent: 'flex-end'
          }}
        />
      )}
    </View>
    <View style={{ flex: 6 }}>
      <ComponentChildren {...props} />
    </View>
  </BackgroundView>
);

export default WrappedHeader;
