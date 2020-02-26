import React from 'react';
import { Image } from 'react-native';

function BookImage({ url, style }) {
    return <Image style={style} source={url ? { uri: url } : require('../../../../assets/default_image.png')} />
}

export default BookImage;