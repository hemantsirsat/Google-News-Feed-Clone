import  React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from 'react-native';

const Banner = () => {
    return(
        <View>
            <StatusBar style='light'/>
            <Image
                source={require('../../assets/banner.png')}
                style={style.imageStyle}
            />
        </View>
    );
};

const style = StyleSheet.create({
    imageStyle:{
        width:'auto',
        height:100,
        marginHorizontal:10,
        marginTop:30,
        marginBottom:10,
        borderRadius:10
    }
});

export default Banner;