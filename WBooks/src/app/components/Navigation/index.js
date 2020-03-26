import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, Image } from 'react-native';

import BookList from '../../screens/Library/screens/BookList';
import BookDetails from '../../screens/BookDetails/screens/BookDetails';
import Wishlist from '../../screens/Wishlist';
import CustomHeader from '../CustomHeader';
import { white, blue, lightGray } from '../../../constants/colors';
import images from '../../../constants/images';
import { library, details, wishlist } from '../../../constants/routes';

import styles from './styles';

const Tab = createBottomTabNavigator();
const LibraryStack = createStackNavigator();

class Navigation extends Component {
  customHeader = () => <CustomHeader />;

  customTabBarIcon = ({ icon }) => <Image source={icon} style={styles.tabBarItem} />;

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
              inactiveTintColor: lightGray
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

export default Navigation;
