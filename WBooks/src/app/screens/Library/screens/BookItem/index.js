import React from 'react';
import {
  FlatList,
  SafeAreaView,
  } from 'react-native';

import BookItem from '../../components/BookItem';
import booksList from '../../../../../constants/data';
import styles from './styles';

function BookList() {
    return (
      <SafeAreaView style={styles.booksListContainer}>
        <FlatList
          data={booksList}
          renderItem={({ item }) => <BookItem title={item.title} url={item.image_url} author={item.author} />}
          keyExtractor={item => (item.id.toString())}
        />
      </SafeAreaView>
    )
}

export default BookList;
