import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

import defaultImage from '../../assets/default_image.png';

function BookImage({ style, url }) {
  return <Image style={style} source={url ? { uri: url } : defaultImage} />;
}

BookImage.propTypes = {
  // eslint-disable-next-line react/forbid-foreign-prop-types
  style: Image.propTypes.style,
  url: PropTypes.string
};

export default BookImage;
