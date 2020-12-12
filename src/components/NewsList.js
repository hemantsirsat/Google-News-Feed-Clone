import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import CardHolder from './CardHolder';
import Feed from '../hooks/Feed';

const NewsList = ({destination}) => {

    const [FetchNews, feed, errorMessage] = Feed();

    return(
        <>
            <FlatList
                data={feed}
                keyExtractor={(item)=>item.url}
                renderItem={({ item })=>{   
                    return(
                        <TouchableOpacity
                            onPress={()=>destination.navigate('Details',{website:item.url})}
                        >    
                            <CardHolder 
                                headLine={item.title}
                                description={item.description}
                                imageurl={item.urlToImage}
                                publishername={item.source.name}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </>
    );
};

const style = StyleSheet.create({

});

export default NewsList;