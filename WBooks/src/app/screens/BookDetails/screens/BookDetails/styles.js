import { StyleSheet }  from 'react-native';
import {
    white,
    darkGray,
    lightGray,
    lightBackgroundBlue,
    red,
    blue,
    black } from '../../../../../constants/colors';

const styles = StyleSheet.create({
    bookDetails: {
        backgroundColor: lightBackgroundBlue,
        height: '100%',
    },
    bookInfoContainer: {
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 5,
        paddingHorizontal: 30,
        paddingVertical: 15,
        paddingBottom: 22,
        backgroundColor: white,
        borderRadius: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        shadowColor: black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 1,
    },
    bookInfo: {
        flexDirection: 'column',
    },
    bookImage: {
        width: 70,
        height: 130,
        resizeMode: 'contain',
    },
    title: {
        marginLeft: 15,
        color: darkGray,
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 29,
    },
    status: {
        marginLeft: 15,
        color: red,
        fontWeight: 'bold',
        lineHeight:18,
        fontSize: 15,
    },
    subtitle: {
        marginLeft: 15,
        color: lightGray,
        lineHeight:18,
        fontSize: 15,
    },
    buttonsContainer: {
        height: 98,
        justifyContent: 'space-between',
    },
    button: {
        height: 44,
        width: 275,
        borderColor: blue,
        borderWidth: 1,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: '900',
        lineHeight: 19,
        color: blue,
    }
});

export default styles;