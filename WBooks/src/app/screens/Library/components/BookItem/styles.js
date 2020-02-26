import { StyleSheet }  from 'react-native';
import colors from '../../../../../constants/colors';

const styles = StyleSheet.create({
  bookItem: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    height: 100,
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  bookImage: {
    width: 50,
    height: 70,
    resizeMode: 'contain',
  },
  bookDescription: {
    flex: 1,
  },
  title: {
    marginLeft: 15,
    color: colors.title,
    fontSize: 17,
    fontWeight: 'bold',
  },
  author: {
    marginLeft: 15,
    color: colors.subtitle,
    fontSize: 15,
  },
});

export default styles;
