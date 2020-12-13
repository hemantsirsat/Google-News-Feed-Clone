import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import useWeatherDetails from '../hooks/useWeatherDetails';
import { Feather } from '@expo/vector-icons';

const Weather = () => {   
    const [FetchWeather, Temperature, TemperatureMax, TemperatureMin, City, Description, Wind, IconID, errorMessage] = useWeatherDetails();
    
    useEffect(()=>{
        FetchWeather();
    },[]);

    if(!Temperature){
        return null
    };
    
    const iconImage = 'https://openweathermap.org/img/wn/'+IconID+'.png';

    return(
        <View style={styles.viewStyle}>
            <Image 
                source={{uri:iconImage}}
                style={styles.iconStyle}
            />
            <View style={styles.firstLineStyle}>
                <Text style={styles.cityStyle}>{Temperature}&deg;C in {City}</Text>
                <Text style={styles.descriptionStyle}>{Description}</Text>
                
            </View>
            <View style={styles.secondLineStyle}>
                <Text style={styles.minmaxtextStyle}>{TemperatureMax}&deg;/{TemperatureMin}&deg;</Text>        
                <Text style={styles.windStyle}><Feather name="wind" size={18} color="white" /> {Wind} m/s</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:'#222',
        width:'auto',
        height:70,
        marginHorizontal:18,
        marginVertical:7,
        borderRadius:10,
        flexDirection:'row'
    },
    iconStyle:{
        width:30,
        height:'auto',
        marginLeft:20
    },  
    firstLineStyle:{
        flexDirection:'column',
        marginTop:15,
    },
    secondLineStyle:{
        flexDirection:'column',
        marginTop:15
    },
    cityStyle:{
        color:'#fff',
        paddingLeft:15,
        fontSize:13
    },  
    minmaxtextStyle:{
        marginLeft:30,
        color:'#fff',
        fontSize:13
    },
    windStyle:{
        color:"#fff",
        marginLeft:30,
        paddingTop:5,
        fontSize:13
    },
    descriptionStyle:{
        color:'#fff',
        paddingLeft:15,
        paddingTop:5,
        fontSize:13
    }
});

export default Weather;