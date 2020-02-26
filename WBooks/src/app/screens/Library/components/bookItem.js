import React from 'react';
import {
      View,
      Text,
      Image,
    } from 'react-native';
import styles from '../screens/styles'; //This styles must be in screens or in a different file:
import BookImage from '../components/bookImage';

function BookItem( { title, url, author }) {
    const titleTrimmed = typeof title === 'string' ? title.trim() : "No title";
    return (
        <View style={styles.bookItem}>
            <Image
                source={{uri: url}}
                style={styles.bookImage}
            />
            <View style={styles.bookDescription}>
                <Text style={styles.title}>{titleTrimmed}</Text>
                <Text style={styles.author}>{author}</Text>
            </View>
        </View>
    );
}

export default BookItem;