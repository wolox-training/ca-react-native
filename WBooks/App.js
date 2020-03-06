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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, Image } from 'react-native';

import BookList from './src/app/screens/Library/screens/BookList';
import BookDetails from './src/app/screens/BookDetails/screens/BookDetails';
import CustomHeader from './src/app/components/CustomHeader';
import { white, blue, lightBackgroundBlue } from './src/constants/colors';
import images from './src/constants/images';

const Tab = createBottomTabNavigator();
const LibraryStack = createStackNavigator();

class App extends Component {
  customHeader = () => <CustomHeader />;

  customTabBarIcon = ({ icon }) => <Image source={icon} style={{ width: 25, height: 25 }} />;

  LibraryStackScreen() {
    return (
      <LibraryStack.Navigator screenOptions={{ headerBackground: this.customHeader, headerTintColor: white }}>
        <LibraryStack.Screen name="Library" component={BookList} />
        <LibraryStack.Screen name="Details" component={BookDetails} />
      </LibraryStack.Navigator>
    );
  }

  render() {
    return (
      <>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: blue,
              inactiveTintColor: 'gray',
              showIcon: true
            }}
          >
            <Tab.Screen
              name="Library"
              component={BookList}
              options={{
                tabBarIcon: ({ focused }) => {
                  const icon = focused ? images.tabBarLibraryActive : images.tabBarLibrary;
                  return <this.customTabBarIcon icon={icon} />;
                }
              }}
            />
          </Tab.Navigator>
          {/* <Stack.Navigator screenOptions={{ headerBackground: this.customHeader, headerTintColor: white }}>
            <Stack.Screen name="Library" component={BookList} />
            <Stack.Screen name="Details" component={BookDetails} />
          </Stack.Navigator> */}
        </NavigationContainer>
      </>
    );
  }
}

export default App;
