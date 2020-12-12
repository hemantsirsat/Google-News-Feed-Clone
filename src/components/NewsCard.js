import React from 'react';
import { View, StyleSheet } from 'react-native';
import NewsList from './NewsList';

const NewsCard = ({ details }) =>{
    return(
        
        <View style={style.viewStyle}>
            <NewsList 
                destination={details}
            />
        </View>
    );
};

const style = StyleSheet.create({
    viewStyle:{
        flex:1
    }
});

export default NewsCard;