import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CardHolder from './CardHolder';
import Banner from './Banner';
import Feed from '../hooks/Feed';

const NewsCard = () =>{

    const [FetchNews, feed, errorMessage] = Feed();
    useEffect(()=>{
        FetchNews();
    },[]);
    return(
        <View style={style.viewStyle}>
            <Banner />
            <CardHolder />
        </View>
    );
};

const style = StyleSheet.create({
    viewStyle:{
        flex:1,
    }
});

export default NewsCard;