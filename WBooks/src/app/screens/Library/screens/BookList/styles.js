import { StyleSheet } from 'react-native';

import { lightBackgroundBlue } from '../../../../../constants/colors';
import { TOP_PADDING } from '../../../../../constants/safeAreaConstants';

const styles = StyleSheet.create({
  booksListContainer: {
    flex: 1,
    backgroundColor: lightBackgroundBlue
  },
  booksFlatList: {
    paddingTop: TOP_PADDING
  }
});

export default styles;
