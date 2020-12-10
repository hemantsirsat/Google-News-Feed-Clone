import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import NewsCard from '../components/NewsCard';

const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <NewsCard 
                details={navigation}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    }
});

export default HomeScreen;