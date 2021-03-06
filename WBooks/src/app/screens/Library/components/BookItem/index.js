import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import CustomImage from '../../../../components/CustomImage';
import images from '../../../../../constants/images';

import styles from './styles';

class BookItem extends PureComponent {
  handlePress = () => {
    const { book, handleOnPress } = this.props;
    handleOnPress(book);
  };

  render() {
    const { book } = this.props;
    const { author, title, imageUrl } = book;
    const titleTrimmed = title.trim();
    return (
      <TouchableOpacity style={styles.bookItem} onPress={this.handlePress}>
        <CustomImage style={styles.bookImage} url={imageUrl} defaultImage={images.defaultBookImage} />
        <View style={styles.bookDescription}>
          <Text style={styles.title}>{titleTrimmed}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

BookItem.propTypes = {
  book: PropTypes.shape({
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    imageUrl: PropTypes.string
  }).isRequired,
  handleOnPress: PropTypes.func.isRequired
};

export default BookItem;
