import { StyleSheet } from 'react-native';

import { white, lightBackgroundBlue, shadow } from '../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bookDetails: {
    backgroundColor: lightBackgroundBlue,
    height: '100%'
  },
  sectionContainer: {
    marginHorizontal: 20,
    marginBottom: 5,
    marginTop: 5,
    paddingHorizontal: 15,
    backgroundColor: white,
    borderRadius: 5,
    alignItems: 'center',
    ...shadow
  },
  infoContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
    paddingVertical: 15,
    paddingBottom: 22
  }
});

export default styles;
