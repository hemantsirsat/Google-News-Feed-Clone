import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import CardHolder from './CardHolder';

const NewsCard = () =>{
    return(
        <View style={style.viewStyle}>
            <Image 
                source={require('../../assets/homeImage.png')}
                style = {style.imageStyle}
            />
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