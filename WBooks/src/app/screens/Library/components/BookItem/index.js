import React from 'react';
import {
      View,
      Text,
    } from 'react-native';
import styles from './styles';
import BookImage from '../BookImage';

function BookItem( { title, url, author }) {
    const titleTrimmed = typeof title === 'string' ? title.trim() : "No title";
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

export default BookItem;