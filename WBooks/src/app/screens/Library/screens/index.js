import React from 'react';
import {
  FlatList,
  } from 'react-native';

import BookItem from '../components/bookItem';
import booksList from '../../../../utils/data';
import { Header } from 'react-native/Libraries/NewAppScreen';

function BookList() {
    return (
      <FlatList
          data={booksList}
          renderItem={({ item }) => <BookItem title={item.title} />}
          keyExtractor={item => item.id.toString()}
      />
    )
}

export default BookList;