import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import useWeatherDetails from '../hooks/useWeatherDetails';

const Weather = () => {   
    const [weatherInfo, errorMessageWeather] = useWeatherDetails();

    return(
        <View style={styles.viewStyle}>
            
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:'#222',
        width:'auto',
        height:80,
        marginHorizontal:18,
        marginVertical:7,
        borderRadius:10,
    },
    textStyle:{
        color:'#fff',
        alignSelf:'center'
    }
});

export default Weather;