import { StyleSheet }  from 'react-native';
import colors from '../../../../utils/colors';

const styles = StyleSheet.create({
  booksListContainer: {
    flex: 1,
    backgroundColor: colors.lightBackgroundBlue,
  },
  bookItem: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    padding: 20,
    height: 100,
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  title: {
    marginLeft: 15,
    color: colors.title,
    fontSize: 20,
  },
  author: {
    marginLeft: 15,
    color: colors.subtitle,
    fontSize: 15,
  },
  bookImage: {
    width: 50,
    height: 70,
  },
  bookDescription: {
    flex: 1,
  }
});

  export default styles;