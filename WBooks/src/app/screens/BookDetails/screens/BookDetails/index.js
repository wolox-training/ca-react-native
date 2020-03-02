import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

import BookImage from '../../../../components/BookImage';

import styles from './styles';

function BookDetails({ route }) {
  const { book } = route.params;
  const { title, author, year, genre, imageUrl } = book;
  return (
    <SafeAreaView>
      <ScrollView style={styles.bookDetails}>
        <View style={styles.container}>
          <View style={styles.bookInfoContainer}>
            <BookImage style={styles.bookImage} url={imageUrl} />
            <View style={styles.bookInfo}>
              <Text style={styles.title}>{title.trim()}</Text>
              <Text style={[styles.subtitle, styles.status]}>Not available</Text>
              <Text style={styles.subtitle}>{author}</Text>
              <Text style={styles.subtitle}>{year}</Text>
              <Text style={styles.subtitle}>{genre}</Text>
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ADD TO WISHLIST</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>RENT</Text>
            </TouchableOpacity>
          </View>
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
