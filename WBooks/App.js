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
} from 'react-native';

import BookList from './src/app/screens/Library/screens';

const App =() => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <BookList />
      </SafeAreaView>
    </>
  );
};

export default App;
