import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';

// import BookImage from '../../../../components/BookImage';
import comments from '../../../../../constants/comments';

import CommentItem from './components/CommentItem';
// import styles from './styles';

class BookComments extends PureComponent {
  renderComment = ({ item }) => <CommentItem comment={item} />;

  elementKeyExtractor = item => item.id.toString();

  render() {
    return (
      <View>
        <FlatList
          nestedScrollEnabled
          scrollEnabled={false}
          data={comments}
          renderItem={this.renderComment}
          keyExtractor={this.elementKeyExtractor}
        />
      </View>
    );
  }
}

export default BookComments;
