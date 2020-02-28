import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import BookImage from '../../../../components/BookImage';

import styles from './styles';

function BookItem({ title, url, author, handleOnPress }) {
  const titleTrimmed = title.trim();
  return (
    <TouchableOpacity style={styles.bookItem} onPress={handleOnPress}>
      <BookImage style={styles.bookImage} url={url} />
      <View style={styles.bookDescription}>
        <Text style={styles.title}>{titleTrimmed}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

BookItem.propTypes = {
  author: PropTypes.string.isRequired,
  handleOnPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default BookItem;
