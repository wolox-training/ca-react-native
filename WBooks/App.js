/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

import BookList from './src/app/screens/Library/screens';
import Header from './src/app/components/Header';

const App =() => {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <Header />
        <BookList />
    </>
  );
};

export default App;
