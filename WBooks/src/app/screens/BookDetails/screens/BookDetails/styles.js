import { StyleSheet } from 'react-native';

import { white, lightBackgroundBlue, shadow } from '../../../../../constants/colors';

const styles = StyleSheet.create({
  bookDetails: {
    backgroundColor: lightBackgroundBlue,
    height: '100%'
  },
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 5,
    paddingHorizontal: 30,
    paddingVertical: 15,
    paddingBottom: 22,
    backgroundColor: white,
    borderRadius: 5,
    alignItems: 'center',
    ...shadow
  }
});

export default styles;
