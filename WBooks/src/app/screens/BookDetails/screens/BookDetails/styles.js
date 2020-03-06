import { StyleSheet } from 'react-native';

import { white, lightBackgroundBlue, shadow } from '../../../../../constants/colors';
import { TOP_PADDING } from '../../../../../constants/safeAreaConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightBackgroundBlue
  },
  bookDetails: {
    paddingTop: TOP_PADDING,
    backgroundColor: lightBackgroundBlue,
    height: '100%'
  },
  sectionContainer: {
    marginHorizontal: 20,
    marginBottom: 5,
    marginTop: 5,
    paddingVertical: 5,
    backgroundColor: white,
    borderRadius: 5,
    alignItems: 'center',
    ...shadow
  },
  infoContainer: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    paddingBottom: 22
  }
});

export default styles;
