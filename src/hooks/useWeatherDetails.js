import { useEffect, useState } from 'react';
import openweather from '../api/openweather';
import useCurrentLocation from '../hooks/useCurrentLocation';

export default () =>{
    const [weatherInfo, setweatherInfo] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [currentLocationLatitude, currentLocationLongitude, errorMessageLocation] = useCurrentLocation();

    const FetchWeather = async () => {
        try{
            const response = await openweather.get('/weather',{
                params:{
                    lat:currentLocationLatitude,
                    lon:currentLocationLongitude,
                    units:'metric',
                    appid:"894782978af57bdfa9df4954dfa1b0a8" 
                }
            });
            setweatherInfo(response.data);
        }
        catch(err){
            setErrorMessage("Something Went Wrong!");
        }
    };
    useEffect(()=>{
        FetchWeather();
    },[])

    return [weatherInfo, errorMessage];
}