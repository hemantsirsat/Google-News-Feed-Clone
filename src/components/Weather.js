import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import useWeatherDetails from '../hooks/useWeatherDetails';
import { Feather } from '@expo/vector-icons';

const Weather = () => {   
    const [FetchWeather, Temperature, TemperatureMax, TemperatureMin, City, Description, Wind, IconID, errorMessage] = useWeatherDetails();
    
    useEffect(()=>{
        FetchWeather();
    },[]);
    
    return(
        <View style={styles.viewStyle}>
            <View style={styles.firstLineStyle}>
                <Text style={styles.cityStyle}>{Temperature}&deg; in {City}</Text>
                <Text style={styles.minmaxtextStyle}>{TemperatureMax}&deg;/{TemperatureMin}&deg;</Text>
            </View>
            <View style={styles.secondLineStyle}>
                <Text style={styles.descriptionStyle}>{Description}</Text>
        
                <Text style={styles.windStyle}><Feather name="wind" size={18} color="white" /> {Wind} m/s</Text>
            </View>
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
        padding:20
    },
    firstLineStyle:{
        flexDirection:'row'
    },
    secondLineStyle:{
        flexDirection:'row',
        paddingTop:10,
    },
    cityStyle:{
        color:'#fff',
        paddingLeft:50
    },  
    minmaxtextStyle:{
        marginLeft:30,
        color:'#fff'
    },
    windStyle:{
        color:"#fff",
        marginLeft:97
    },
    descriptionStyle:{
        color:'#fff',
        paddingLeft:50
    },
    textStyle:{
        color:'#fff',
        alignSelf:'center'
    }
});

export default Weather;