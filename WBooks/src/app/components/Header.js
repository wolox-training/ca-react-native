import {Text, StyleSheet, ImageBackground} from 'react-native';

const Header = () => {
    <ImageBackground
        accessibilityRole={'image'}
        source={'./bc_nav bar.png'}
        style={styles.background}
        imageStyle={styles.logo}>
            <Text style={styles.text}>Library</Text>
        </ImageBackground>
}

const styles = StyleSheet.create({
    background: {
        paddingBottom: 40,
        paddingTop: 96,
        paddingHorizontal: 32,
        backgroundColor: Colors.lighter,  
    },
    logo: {
        overflow: 'visible',
        resizeMode: 'cover',
    },
    text: {
        fontSize: 40,
        fontWeight: '600',
        textAlign: 'center',
        color: Colors.black,
      },
})

export default Header;