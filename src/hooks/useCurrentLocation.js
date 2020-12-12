import React from 'react';
import * as Location from 'expo-location';
import { useState } from 'react';

export default () =>{
    const [currentLocation, setcurrentLocation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //get user current location
    const GetLocationCordinates = async () => {
        //Ask Permission
        let { status } = await Location.requestPermissionsAsync();
    
        if(status!=='granted'){
            setErrorMessage("Permission Denied");
            return;
        }
        //Location object stored in locationCordinates
        let locationCordinates = await Location.getCurrentPositionAsync();
        setcurrentLocation(locationCordinates);
    }

    return [GetLocationCordinates, currentLocation, errorMessage];
};