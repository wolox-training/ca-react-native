import React from 'react';
import { Image } from 'react-native';

import navBarImage from '../../assets/bc_nav_bar.png';

import styles from './styles';

function CustomHeader() {
  return <Image source={navBarImage} style={styles.image} />;
}

export default CustomHeader;
