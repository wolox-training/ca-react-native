import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

import defaultImage from '../../assets/default_image.png';

function BookImage({ url, style }) {
  return <Image style={style} source={url ? { uri: url } : defaultImage} />;
}

BookImage.propTypes = {
  style: PropTypes.object.isRequired
  url: PropTypes.string
};

export default BookImage;
