import { StyleSheet } from 'react-native';

import { darkGray, lightGray, white } from '../../../../../../../constants/colors';

const styles = StyleSheet.create({
  commentContainer: {
    backgroundColor: white,
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '100%'
  },
  commentTextContainer: {
    paddingHorizontal: 20,
    width: '100%'
  },
  title: {
    color: darkGray,
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 18
  },
  commentText: {
    paddingTop: 5,
    color: lightGray,
    fontWeight: '300',
    fontSize: 15,
    lineHeight: 18,
    width: '100%'
  },
  userImage: {
    width: 45,
    height: 45,
    resizeMode: 'contain'
  }
});

export default styles;
