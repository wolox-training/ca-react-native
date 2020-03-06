import React from 'react';
import { Image } from 'react-native';

import images from '../../../constants/images';

import styles from './styles';

function CustomHeader() {
  return <Image source={images.navBarImage} style={styles.image} />;
}

export default CustomHeader;
