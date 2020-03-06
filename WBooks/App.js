/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import BookList from './src/app/screens/Library/screens/BookList';
import BookDetails from './src/app/screens/BookDetails/screens/BookDetails';
import CustomHeader from './src/app/components/CustomHeader';
import { white } from './src/constants/colors';

const Stack = createStackNavigator();

class App extends Component {
  customHeader = () => <CustomHeader />;

  render() {
    return (
      <>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <Stack.Navigator screenOptions={{ headerBackground: this.customHeader, headerTintColor: white }}>
            <Stack.Screen name="Library" component={BookList} />
            <Stack.Screen name="Details" component={BookDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default App;
