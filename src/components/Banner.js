import  React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Banner = () => {
    return(
        <View>
            <Image
                source={require('../../assets/banner.jpg')}
                style={style.imageStyle}
            />
        </View>
    );
};

const style = StyleSheet.create({
    imageStyle:{
        width:'auto',
        height:100,
        marginHorizontal:15,
        marginTop:30,
        marginBottom:10,
        borderRadius:10
    }
});

export default Banner;