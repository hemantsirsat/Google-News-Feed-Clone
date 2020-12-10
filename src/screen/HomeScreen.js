import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import NewsCard from '../components/NewsCard';

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <NewsCard />
            <StatusBar style="auto" />
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