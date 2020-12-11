import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const CardHolder = ( {headLine, description, publishername, imageurl} ) => {

    let Image_uri = imageurl;
    
    return(
        <View style={style.viewStyle}>
            <Image 
                style={style.imageStyle}
                source={{uri:Image_uri}}  
            />
            <Text style={style.headLine}>
                {headLine}
            </Text>
            <Text style={style.summaryStyle}>
                {description}
            </Text>
            <View style={style.imageCaption}>
                <Text style={style.publisherName}>
                    {publishername}
                </Text>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    viewStyle:{
        marginHorizontal:16,
        borderWidth:2,
        backgroundColor:'#222',
        borderRadius:10,
        paddingBottom:10,
        marginVertical:8
    },
    imageStyle:{
        height:150,
        borderRadius:10
    },
    publisherName:{
        color:'#808080',
        marginHorizontal:10
    },
    headLine:{
        fontSize:20,
        marginHorizontal:10,
        color:'#fff'
    },
    summaryStyle:{
        fontSize:14,
        color:'#808080',
        marginVertical:7,
        marginHorizontal:10
    }
});

export default CardHolder;