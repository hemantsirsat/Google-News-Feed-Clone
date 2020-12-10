import React, {useEffect,useState} from 'react';
import { FlatList, TouchableOpacity, StyleSheet, View } from 'react-native';
import CardHolder from './CardHolder';
import Feed from '../hooks/Feed';

const NewsList = () => {
    const [FetchNews, feed, errorMessage] = Feed();
/*   
    useEffect(()=>{
        FetchNews();
    },[]);
*/
    return(
        <View>
            <FlatList
                data={feed}
                keyExtractor={(item)=>item.url}
                renderItem={({ item })=>{   
                    return(
                        <TouchableOpacity>
                            <CardHolder 
                                headLine={item.title}
                                description={item.description}
                                imageurl={`${item.urlToImage}`}
                                publishername={item.source.name}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const style = StyleSheet.create({

});

export default NewsList;