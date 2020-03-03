import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import BookImage from '../../../../../../components/BookImage';

import styles from './styles';

function CommentItem({ comment }) {
  const { message, user } = comment;
  const { imageUrl, name } = user;
  return (
    <View style={styles.commentContainer}>
      <BookImage style={styles.userImage} url={imageUrl} />
      <View style={styles.commentTextContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.commentText}>{message}</Text>
      </View>
    </View>
  );
}

CommentItem.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string
    }).isRequired
  }).isRequired
};

export default CommentItem;
