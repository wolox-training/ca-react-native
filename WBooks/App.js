/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BookList from './src/app/screens/Library/screens';
import Header from './src/app/components/Header';

const App =() => {
  return (
    <>
    <NavigationContainer>
      <StatusBar barStyle='light-content' />
      <Header />
      <BookList />
    </NavigationContainer>
    </>
  );
};

export default App;
