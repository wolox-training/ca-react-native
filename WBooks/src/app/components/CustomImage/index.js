import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

function CustomImage({ style, url, defaultImage }) {
  return <Image style={style} source={url ? { uri: url } : defaultImage} />;
}

CustomImage.propTypes = {
  // eslint-disable-next-line react/forbid-foreign-prop-types
  defaultImage: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-foreign-prop-types
  style: Image.propTypes.style,
  url: PropTypes.string
};

export default CustomImage;
