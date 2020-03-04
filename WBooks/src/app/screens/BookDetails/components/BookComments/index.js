import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import comments from '../../../../../constants/comments';

import CommentItem from './components/CommentItem';
import styles from './styles';

const INITIAL_SHOWN_COMMENTS = 2;

class BookComments extends Component {
  state = {
    showAll: false
  };

  selectedComments = comments.slice(0, INITIAL_SHOWN_COMMENTS);

  renderComment = item => <CommentItem key={this.elementKeyExtractor(item)} comment={item} />;

  elementKeyExtractor = item => `${item.id}`;

  handleShowAllComments = () => {
    this.setState({ showAll: true });
    this.selectedComments = comments;
  };

  render() {
    const { showAll } = this.state;
    return (
      <>
        {this.selectedComments.map(this.renderComment)}
        {!showAll && (
          <TouchableOpacity style={styles.viewAllButton} onPress={this.handleShowAllComments}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        )}
      </>
    );
  }
}

export default BookComments;
