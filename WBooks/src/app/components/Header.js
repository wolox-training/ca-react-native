import React from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';
import colors from '../../utils/colors';
import nabBarImage from '../assets/bc_nav_bar.png';

const Header = () => {
    return(    
    <ImageBackground
        accessibilityRole={'image'}
        source={nabBarImage}
        style={styles.background}
        imageStyle={styles.logo}>
            <Text style={styles.text}>Library</Text>
    </ImageBackground>)
}

const styles = StyleSheet.create({ //TODO: donde van estos styles?
    background: {
        height: 150,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightBackgroundBlue,
    },
    logo: {
        overflow: 'visible',
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        color: colors.white,
      },
})

export default Header;