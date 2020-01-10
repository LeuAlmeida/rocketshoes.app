import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import store from './store';

import Routes from './routes';

// console.disableYellowBox = true;

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#333" />
      <Routes />
    </Provider>
  );
}
