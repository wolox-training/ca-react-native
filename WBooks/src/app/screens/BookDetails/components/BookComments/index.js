import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

// import BookImage from '../../../../components/BookImage';
import comments from '../../../../../constants/comments';

import CommentItem from './components/CommentItem';
// import styles from './styles';

class BookComments extends PureComponent {
  renderComment = item => <CommentItem key={this.elementKeyExtractor(item)} comment={item} />;

  elementKeyExtractor = item => item.id.toString();

  render() {
    return <>{comments.map(this.renderComment)}</>;
  }
}

export default BookComments;
