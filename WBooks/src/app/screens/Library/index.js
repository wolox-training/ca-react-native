import React from 'react';
import {
  FlatList,
    View,
    Text,
  } from 'react-native';

import styles from './styles';
import booksList from '../../../utils/data';

function Item( { title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

function BookList() {
    return (
    <FlatList
        data={booksList}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id.toString()}
    />)
}

export default BookList;