import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

function BookImage({ style, url, defaultImage }) {
  return <Image style={style} source={url ? { uri: url } : defaultImage} />;
}

BookImage.propTypes = {
  defaultImage: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-foreign-prop-types
  style: Image.propTypes.style,
  url: PropTypes.string
};

export default BookImage;
