import React, {useEffect} from 'react';
import { FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
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
        <ScrollView>
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
        </ScrollView>
    );
};

const style = StyleSheet.create({

});

export default NewsList;