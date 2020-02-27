import React, { Component } from 'react';
import {
  FlatList,
  SafeAreaView,
  } from 'react-native';

import BookItem from '../../components/BookItem';
import booksList from '../../../../../constants/data';
import styles from './styles';

class BookList extends Component {
  renderBook = ({ item }) => {
    return (
      <BookItem
        title={item.title}
        url={item.image_url}
        author={item.author}  
      />
    );
  };

  elementKeyExtractor = (item) => item.id.toString()

  render() {
    return (
      <SafeAreaView style={styles.booksListContainer}>
        <FlatList
          data={booksList}
          renderItem={this.renderBook}
          keyExtractor={this.elementKeyExtractor}
        />
      </SafeAreaView>
    );
  };
}

export default BookList;
