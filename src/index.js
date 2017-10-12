// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import reducers from './configs/configReducers';
import thunk from 'redux-thunk';
import { compose } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import App from './containers/app/App';
import AppWithNavigationState from './containers/app/SlideMenu';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const Chess = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

AppRegistry.registerComponent('Chess', () => Chess);
