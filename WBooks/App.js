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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, Image } from 'react-native';

import BookList from './src/app/screens/Library/screens/BookList';
import BookDetails from './src/app/screens/BookDetails/screens/BookDetails';
import Wishlist from './src/app/screens/Wishlist';
import CustomHeader from './src/app/components/CustomHeader';
import { white, blue } from './src/constants/colors';
import images from './src/constants/images';
import { library, details, wishlist } from './src/constants/routes';

const Tab = createBottomTabNavigator();
const LibraryStack = createStackNavigator();

class App extends Component {
  customHeader = () => <CustomHeader />;

  customTabBarIcon = ({ icon }) => <Image source={icon} style={{ width: 25, height: 25 }} />;

  LibraryStackScreen = () => (
    <LibraryStack.Navigator screenOptions={{ headerBackground: this.customHeader, headerTintColor: white }}>
      <LibraryStack.Screen name={library} component={BookList} />
      <LibraryStack.Screen name={details} component={BookDetails} />
    </LibraryStack.Navigator>
  );

  render() {
    return (
      <>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: blue,
              inactiveTintColor: 'gray'
            }}>
            <Tab.Screen
              name="Library"
              component={this.LibraryStackScreen}
              options={{
                tabBarIcon: ({ focused }) => {
                  const icon = focused ? images.tabBarLibraryActive : images.tabBarLibrary;
                  return <this.customTabBarIcon icon={icon} />;
                }
              }}
            />
            <Tab.Screen
              name={wishlist}
              component={Wishlist}
              options={{
                tabBarIcon: ({ focused }) => {
                  const icon = focused ? images.tabBarWishlistActive : images.tabBarWishlist;
                  return <this.customTabBarIcon icon={icon} />;
                }
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default App;
