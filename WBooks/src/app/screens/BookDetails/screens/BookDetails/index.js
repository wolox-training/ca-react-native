import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, SafeAreaView } from 'react-native';

import BookInfo from '../../components/BookInfo';

import styles from './styles';

function BookDetails({ route }) {
  const { book } = route.params;
  return (
    <SafeAreaView>
      <ScrollView style={styles.bookDetails}>
        <View style={styles.container}>
          <BookInfo book={book} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

BookDetails.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      book: PropTypes.shape({
        author: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        imageUrl: PropTypes.string
      }).isRequired
    }).isRequired
  })
};

export default BookDetails;
