import * as Location from 'expo-location';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

export default () =>{
    const [currentLocationLatitude, setcurrentLocationLatitude] = useState('');
    const [currentLocationLongitude, setcurrentLocationLongitude] = useState('');
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
        setcurrentLocationLatitude(locationCordinates.coords.latitude);
        setcurrentLocationLongitude(locationCordinates.coords.longitude);
    }
    useEffect(()=>{
        GetLocationCordinates();
    },[]);
    return [currentLocationLatitude, currentLocationLongitude, errorMessage];
};