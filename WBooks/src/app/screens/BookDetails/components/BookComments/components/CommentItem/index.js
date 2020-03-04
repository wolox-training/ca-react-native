import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import CustomImage from '../../../../../../components/CustomImage';
import images from '../../../../../../../constants/images';

import styles from './styles';

function CommentItem({ comment }) {
  const { message, user } = comment;
  return (
    <View style={styles.commentContainer}>
      <CustomImage style={styles.userImage} url={user.imageUrl} defaultImage={images.defaultProfileImage} />
      <View style={styles.commentTextContainer}>
        <Text style={styles.title}>{user.name}</Text>
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
