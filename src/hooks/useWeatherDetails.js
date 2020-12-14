import { useState } from 'react';
import openweather from '../api/openweather';
import useCurrentLocation from '../hooks/useCurrentLocation';

export default () =>{
    const [errorMessage, setErrorMessage] = useState('');
    const [Temperature, setTemperature] = useState('');
    const [TemperatureMax, setTemperatureMax] = useState('');
    const [TemperatureMin, setTemperatureMin] = useState('');
    const [City, setCity] = useState('');
    const [Description, setDescription] = useState('');
    const [Wind, setWind] = useState('');
    const [IconID, setIconID] = useState('');
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
            
            setTemperature(response.data.main.temp);
            setTemperatureMax(response.data.main.temp_max);
            setTemperatureMin(response.data.main.temp_min);
            setCity(response.data.name);
            setDescription(response.data.weather[0].main);
            setWind(response.data.wind.speed);
            setIconID(response.data.weather[0].icon);
        }
        catch(err){
            setErrorMessage("Something Went Wrong!");
        }
    };

    return [FetchWeather, Temperature, TemperatureMax, TemperatureMin, City, Description, Wind, IconID, errorMessage];
}