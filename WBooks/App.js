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

import BookList from './src/app/screens/Library/screens/BookList';
import BookDetails from './src/app/screens/BookDetails/screens/BookDetails';

const Stack = createStackNavigator();

class App extends Component {
  static navigationOptions = {
    title: 'Library'
  };

  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Library" component={BookList} />
            <Stack.Screen name="Details" component={BookDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default App;
