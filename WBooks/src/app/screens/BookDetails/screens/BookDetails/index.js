import React from 'react';
import { 
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity } from 'react-native';
import styles from './styles';
import BookImage from '../../../../components/BookImage';

function BookDetails({ title, author, url }) {
    return (
        <SafeAreaView>
            <ScrollView style={styles.bookDetails}>
                <View style={styles.bookInfoContainer}>
                    <BookImage url={url} style={styles.bookImage} />
                    <View  style={styles.bookInfo}>
                        <Text style={styles.title}>{'Hola mundo'}</Text>
                        <Text style={styles.status}>{'Not available'}</Text>
                        <Text style={styles.subtitle}>{'Carolina'}</Text>
                        <Text style={styles.subtitle}>{'2019'}</Text>
                        <Text style={styles.subtitle}>{'Development'}</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>{'ADD TO WISHLIST'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>{'RENT'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default BookDetails;