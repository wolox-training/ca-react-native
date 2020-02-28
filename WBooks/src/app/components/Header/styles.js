import { StyleSheet } from 'react-native';

import { lightBackgroundBlue, white } from '../../../constants/colors';

const styles = StyleSheet.create({
  background: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightBackgroundBlue
  },
  logo: {
    overflow: 'visible',
    resizeMode: 'cover',
    height: '100%',
    width: '100%'
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    color: white
  }
});

export default styles;
