import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, SafeAreaView } from 'react-native';
import { CamelcaseSerializer } from 'cerealizr';

import BookItem from '../../components/BookItem';
import { details } from '../../../../../constants/routes';
import store from '../../../../../redux/store';
import { getBooks } from '../../../../../redux/actionCreators';

import styles from './styles';

const serializer = new CamelcaseSerializer();

class BookList extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        books: store.getState().books
      });
    });

    this.getBooks();
  }

  onSelection = item => this.props.navigation.navigate(details, { book: item });

  renderBook = ({ item }) => <BookItem book={item} handleOnPress={this.onSelection} />;

  elementKeyExtractor = item => `${item.id}`;

  getBooks = () => {
    store.dispatch(getBooks());
  };

  render() {
    const serializedData = serializer.serialize(this.state.books);
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
