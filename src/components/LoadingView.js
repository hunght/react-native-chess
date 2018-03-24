//@flow
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { branch, renderComponent } from 'recompose';

const Loading = () => (
  <View style={{ flex: 1, alignSelf: 'stretch' }}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

export const withLoadingComponent = branch(
  props => props.loading,
  renderComponent(Loading)
);
