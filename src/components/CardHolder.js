import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const CardHolder = () => {
    let Image_uri = {uri:"https://static.india.com/wp-content/uploads/2020/12/HRD-Minister.png"}
    return(
        <View style={style.viewStyle}>
            <Image 
                style={style.imageStyle}
                source={Image_uri}
            />
            <Text style={style.headLine}>
            CBSE Board Exam 2021: Education Minister Answers Queries on Syllabus Reduction, Postponement of Exams | Know - India.com            </Text>
            <Text style={style.summaryStyle}>
CBSE Board Exam 2021 Latest Updates: On questions of reduction of CBSE Class 10 and 12 syllabus, Pokhriyal said that the board has already reduced the 30 per cent of the syllabus. However, he didn't rule out the possibility of further reduction in the syllabu…            </Text>
            <View style={style.imageCaption}>
                <Text style={style.publisherName}>India.com</Text>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    viewStyle:{
        marginHorizontal:15,
        borderWidth:2,
        backgroundColor:'#222',
        borderRadius:10,
        paddingBottom:10
    },
    imageStyle:{
        height:150,
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