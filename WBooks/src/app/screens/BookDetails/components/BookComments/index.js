import React, { PureComponent } from 'react';
import { Button } from 'react-native';

import comments from '../../../../../constants/comments';

import CommentItem from './components/CommentItem';

const INITIAL_SHOWN_COMMENTS = 2;

class BookComments extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false
    };
  }

  renderComment = item => <CommentItem key={this.elementKeyExtractor(item)} comment={item} />;

  elementKeyExtractor = item => item.id.toString();

  handleShowAllComments = () => this.setState({ showAll: true });

  render() {
    const { showAll } = this.state;
    const selectedComments = showAll ? comments : comments.slice(0, INITIAL_SHOWN_COMMENTS);
    return (
      <>
        {selectedComments.map(this.renderComment)}
        {!showAll && <Button title="View All" onPress={this.handleShowAllComments} />}
      </>
    );
  }
}

export default BookComments;
