import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import NewsCard from '../components/NewsCard';
import { StatusBar } from 'expo-status-bar';
import Banner from  '../components/Banner';
import useCurrentLocation from '../hooks/useCurrentLocation'; 

const HomeScreen = ({navigation}) => {
    const [GetLocationCordinates, currentLocation, errorMessage] = useCurrentLocation();
    
    useEffect(()=>{
        GetLocationCordinates();
    },[]);
    console.log(currentLocation);
    console.log(errorMessage);

    return(
        <View style={styles.container}>
            <StatusBar style='auto'/>
            <Banner />
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