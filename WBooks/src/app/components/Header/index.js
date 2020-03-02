import React from 'react';
import { Text, ImageBackground } from 'react-native';

import navBarImage from '../../assets/bc_nav_bar.png';

import styles from './styles';

function Header() {
  return (
    <ImageBackground
      accessibilityRole="image"
      source={navBarImage}
      style={styles.background}
      imageStyle={styles.logo}>
      <Text style={styles.text}>Library</Text>
    </ImageBackground>
  );
}

export default Header;
