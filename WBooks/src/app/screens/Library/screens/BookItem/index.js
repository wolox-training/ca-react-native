import React, { Component } from 'react';
import {
  FlatList,
  SafeAreaView,
  } from 'react-native';

import BookItem from '../../components/BookItem';
import booksList from '../../../../../constants/data';
import styles from './styles';

class BookList extends Component {
  renderBook = ({ item: { title, image_url: url, author } }) => {
    return (
      <BookItem
        title={title}
        url={url}
        author={author}  
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
