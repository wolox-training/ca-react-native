import React from 'react';
import { Image } from 'react-native';
import defaultImage from '../../../../assets/default_image.png';

function BookImage({ url, style }) {
    return <Image style={style} source={url ? { uri: url } : defaultImage} />
}

export default BookImage;
