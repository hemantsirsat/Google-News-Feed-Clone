import React from 'react';
import { View, StyleSheet } from 'react-native';
import NewsList from './NewsList';
import Banner from './Banner';


const NewsCard = () =>{

    return(
        <View style={style.viewStyle}>
            <Banner />
            <NewsList />
        </View>
    );
};

const style = StyleSheet.create({
    viewStyle:{
        flex:1,
    }
});

export default NewsCard;