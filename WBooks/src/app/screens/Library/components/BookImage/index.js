import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import defaultImage from '../../../../assets/default_image.png';

function BookImage({ url, style }) {
    return <Image style={style} source={url ? { uri: url } : defaultImage} />
}

BookImage.propTypes = {
    url: PropTypes.string,
    style: PropTypes.object.isRequired
}

export default BookImage;
