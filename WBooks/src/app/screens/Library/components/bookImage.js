import React from 'react';
import {
      Image,
    } from 'react-native';

function BookImage({ url }) { //TODO: this needs to handle download error
    if (url != null)  {
        return (
            <Image source={{uri: url}} />
        )
    } else {
        return (
            <Image source={require('../../../assets/bc_inicio.png')} />
        )
    }
}

export default BookImage;