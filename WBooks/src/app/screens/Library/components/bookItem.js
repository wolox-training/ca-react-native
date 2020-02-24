import React from 'react';
import {
      View,
      Text,
      Image,
    } from 'react-native';
import styles from '../screens/styles';
import BookImage from '../components/bookImage';

function BookItem( { title, url, author }) {
    return (
        <View style={styles.bookItem}>
            <Image
                source={{uri: url}}
                style={styles.bookImage}
            />
            <View style={styles.bookDescription}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.author}>{author}</Text>
            </View>
        </View>
    );
}

export default BookItem;