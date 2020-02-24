import React from 'react';
import {
      View,
      Text,
    } from 'react-native';
import styles from '../screens/styles';

function BookItem( { title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
}

export default BookItem;