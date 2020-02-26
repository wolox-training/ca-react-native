import { StyleSheet }  from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
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

export default styles;