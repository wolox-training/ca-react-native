import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

import BookImage from '../../../../components/BookImage';

import styles from './styles';

function BookDetails({ title, author, url, year, genre }) {
  // const { title, author, image_url: url, year, genre } = book.params;
  return (
    <SafeAreaView>
      <ScrollView style={styles.bookDetails}>
        <View style={styles.bookInfoContainer}>
          <BookImage url={url} style={styles.bookImage} />
          <View style={styles.bookInfo}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.status}>Not available</Text>
            <Text style={styles.subtitle}>{author}</Text>
            <Text style={styles.subtitle}>{year}</Text>
            <Text style={styles.subtitle}>{genre}</Text>
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
  author: PropTypes.string.isRequired,
  book: PropTypes.object.isRequired,
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default BookDetails;
