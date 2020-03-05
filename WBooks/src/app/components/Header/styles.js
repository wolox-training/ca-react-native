import { StyleSheet, Dimensions } from 'react-native';

import { lightBackgroundBlue } from '../../../constants/colors';

const TOTAL_WIDTH = Dimensions.width;

const styles = StyleSheet.create({
  image: {
    width: TOTAL_WIDTH,
    height: 140,
    backgroundColor: lightBackgroundBlue
  }
});

export default styles;
