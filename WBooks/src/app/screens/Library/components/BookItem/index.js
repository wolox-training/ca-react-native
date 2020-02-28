import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import BookImage from '../../../../components/BookImage';

import styles from './styles';

function BookItem({ title, url, author, onPress }) {
  const titleTrimmed = title.trim();
  return (
    <TouchableOpacity style={styles.bookItem} onPress={onPress}>
      <BookImage url={url} style={styles.bookImage} />
      <View style={styles.bookDescription}>
        <Text style={styles.title}>{titleTrimmed}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

BookItem.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  url: PropTypes.string
};

export default BookItem;
