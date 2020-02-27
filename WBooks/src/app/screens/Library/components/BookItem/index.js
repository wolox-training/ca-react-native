import React from 'react';
import PropTypes from 'prop-types';
import {
      View,
      Text,
} from 'react-native';
import styles from './styles';
import BookImage from '../BookImage';

function BookItem( { title, url, author }) {
    const titleTrimmed = title.trim();
    return (
        <View style={styles.bookItem}>
            <BookImage url={url} style={styles.bookImage} />
            <View style={styles.bookDescription}>
                <Text style={styles.title}>{titleTrimmed}</Text>
                <Text style={styles.author}>{author}</Text>
            </View>
        </View>
    );
}

BookItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    author: PropTypes.string.isRequired
}

export default BookItem;
