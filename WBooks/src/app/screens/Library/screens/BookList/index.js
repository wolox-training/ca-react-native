import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { CamelcaseSerializer } from 'cerealizr';

import BookItem from '../../components/BookItem';
import { details } from '../../../../../constants/routes';
import { getBooks } from '../../../../../redux/actionCreators';

import styles from './styles';

const serializer = new CamelcaseSerializer();

class BookList extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  onSelection = item => this.props.navigation.navigate(details, { book: item });

  renderBook = ({ item }) => <BookItem book={item} handleOnPress={this.onSelection} />;

  elementKeyExtractor = item => `${item.id}`;

  render() {
    const serializedData = serializer.serialize(this.props.books);
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

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBooks() {
      dispatch(getBooks());
    }
  };
};

BookList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
  // TODO: define books and getBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
