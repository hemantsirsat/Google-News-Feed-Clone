import React from 'react';
import { StyleSheet, View } from 'react-native';
import NewsCard from '../components/NewsCard';
import { StatusBar } from 'expo-status-bar';
import Banner from  '../components/Banner';
import Weather from '../components/Weather';

const HomeScreen = ({navigation}) => {

    return(
        <View style={styles.container}>
            <StatusBar style='auto'/>
            <Banner />
            <Weather />
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
    },
});

export default HomeScreen;