import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const CardHolder = () => {
    let Image_uri = {uri:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HBB7HXHLXZHBLCJ7VNHMATDLNI.jpg&w=1440"}
    return(
        <View style={style.viewStyle}>
            <Image 
                style={style.imageStyle}
                source={Image_uri}
            />
            <View style={style.imageCaption}>
                <Text style={style.authorName}>John Wagner</Text>
                <Text style={style.publisherName}>The Washington Post</Text>
            </View>
            <Text style={style.headLine}>
                Live updates: Biden to introduce health team members; Trump to tout progress on vaccines - The Washington Post
            </Text>
            <Text style={style.summaryStyle}>
                The Arizona Republican Party, whose chairwoman has formally challenged Bidens victory in the state, is using its Twitter account to ask its followers whether they are willing to die....
            </Text>
        </View>
    );
};

const style = StyleSheet.create({
    viewStyle:{
        padding:2,
        marginHorizontal:20,
        borderWidth:2
    },
    imageCaption:{
        flexDirection:'row',
        
    },
    imageStyle:{
        height:150,
    },
    authorName:{
        marginLeft:5,
        color:'#D3D3D3',
        fontFamily:'monospace'
    },
    publisherName:{
        marginLeft:'auto',
        marginRight:5,
        color:'#D3D3D3',
        fontFamily:'monospace'
    },
    headLine:{
        fontSize:20,
        fontWeight:'bold',
        marginHorizontal:5,
    },
    summaryStyle:{
        fontSize:16
    }
});

export default CardHolder;