/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookList from './src/app/screens/Library/screens/BookList';
import BookDetails from './src/app/screens/BookDetails/screens/BookDetails';
import Header from './src/app/components/Header';

const Stack = createStackNavigator();

// function LibraryView() {
//   return (
//       // <StatusBar barStyle='light-content' />
//       // <Header />
//       <BookList navigation={NavigationContainer}/>    
//   );
// }

const App =() => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Library' component={BookList} />
        <Stack.Screen name='Details' component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;
