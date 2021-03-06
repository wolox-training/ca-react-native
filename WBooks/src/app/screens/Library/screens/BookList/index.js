import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, SafeAreaView } from 'react-native';
import { CamelcaseSerializer } from 'cerealizr';

import BookItem from '../../components/BookItem';
import booksList from '../../../../../constants/data';
import { details } from '../../../../../constants/routes';

import styles from './styles';

const serializer = new CamelcaseSerializer();

class BookList extends Component {
  onSelection = item => this.props.navigation.navigate(details, { book: item });

  renderBook = ({ item }) => <BookItem book={item} handleOnPress={this.onSelection} />;

  elementKeyExtractor = item => `${item.id}`;

  render() {
    const serializedData = serializer.serialize(booksList);
    return (
      <SafeAreaView style={styles.booksListContainer}>
        <FlatList
          contentContainerStyle={styles.booksFlatList}
          data={serializedData}
          renderItem={this.renderBook}
          keyExtractor={this.elementKeyExtractor}
        />
      </SafeAreaView>
    );
  }
}

BookList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};

export default BookList;
