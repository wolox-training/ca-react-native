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
  userImageContainer: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    overflow: 'hidden',
    borderRadius: IMAGE_WIDTH / 2,
    backgroundColor: lightBackgroundBlue
  },
  userImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});

export default styles;
