import { StyleSheet } from 'react-native';

import {
  white,
  darkGray,
  lightGray,
  lightBackgroundBlue,
  red,
  blue,
  black
} from '../../../../../constants/colors';

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
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    alignItems: 'center'
  },
  bookInfoContainer: {
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  bookInfo: {
    flexDirection: 'column',
    flex: 1
  },
  bookImage: {
    width: 70,
    height: 105,
    resizeMode: 'contain'
  },
  title: {
    marginLeft: 15,
    color: darkGray,
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 29
  },
  status: {
    marginLeft: 15,
    color: red,
    fontWeight: 'bold',
    lineHeight: 18,
    fontSize: 15
  },
  subtitle: {
    marginLeft: 15,
    color: lightGray,
    lineHeight: 18,
    fontSize: 15
  },
  buttonsContainer: {
    width: '100%',
    height: 98,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  button: {
    width: '100%',
    height: 44,
    borderColor: blue,
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: '900',
    lineHeight: 19,
    color: blue
  }
});

export default styles;
