import React from 'react';
import {
  FlatList,
  View,
  TouchableWithoutFeedback,
  } from 'react-native';
import BookItem from '../components/bookItem';
import booksList from '../../../../utils/data';
import styles from './styles';

// function _onPress() {
//   navigator.navi
// }

function BookList() {
    return (
      <View style={styles.booksListContainer}>
        <FlatList
          data={booksList}
          renderItem={({ item }) => (
            <BookItem 
              title={item.title} 
              url={item.image_url} 
              author={item.author}
            />
          )}
          keyExtractor={item => (item.id.toString())}
        />
      </View>
    )
}

export default BookList;