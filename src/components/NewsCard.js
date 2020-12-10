import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import CardHolder from './CardHolder';
import Banner from './Banner';

const NewsCard = () =>{
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
    },
    imageStyle:{
        alignSelf:'center',
        marginTop:50,
        height:200,
        width:200,
    }
});

export default NewsCard;