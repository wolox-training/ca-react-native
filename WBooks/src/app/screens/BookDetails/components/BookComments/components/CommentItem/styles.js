import { StyleSheet } from 'react-native';

import { darkGray, lightGray, white, lightBackgroundBlue } from '../../../../../../../constants/colors';

const IMAGE_WIDTH = 45;
const styles = StyleSheet.create({
  commentContainer: {
    backgroundColor: white,
    flexDirection: 'row',
    padding: 15
  },
  commentTextContainer: {
    paddingLeft: 20,
    paddingRight: 10,
    flex: 1
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
    lineHeight: 18
  },
  userImage: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    resizeMode: 'contain',
    borderRadius: IMAGE_WIDTH / 2,
    backgroundColor: lightBackgroundBlue
  }
});

export default styles;
