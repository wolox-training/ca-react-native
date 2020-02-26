import React from 'react';
import { Text, ImageBackground } from 'react-native';
import nabBarImage from  '../../assets/bc_nav_bar.png';
import styles from './styles';

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

export default Header;