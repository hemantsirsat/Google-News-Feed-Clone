import { useEffect, useState } from 'react';
import newsapi from '../api/newsapi';

export default () => {
    const [feed ,setFeed] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const FetchNews = async() =>{
        try{
            const response = await newsapi.get('/top-headlines',{
                params:{
                    limit:15,
                    country:'in',
                    apiKey:'4dba950548ed44b59b69eb4b497151d0'
                }
            });
            setFeed(response.data);
            console.log(feed);
        }
        catch(err){
            setErrorMessage("Something Went Wrong!");
            console.log(errorMessage);
        }
    };

    useEffect(()=>{
        FetchNews();
    },[]);
    return [FetchNews, feed, errorMessage];
};