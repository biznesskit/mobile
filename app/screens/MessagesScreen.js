import React, {useState} from 'react';
import { FlatList, View } from 'react-native';


import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
    {
        id:1,
        title:'T1',
        descroption:'d1',
        image:require('../assets/me.jpg')
    },
    {
        id:2,
        title:'T22',
        descroption:'d2',
        image:require('../assets/favicon.png')
    },
    {
        id:3,
        title:'T3',
        descroption:'d3',
        image:require('../assets/chair.jpg')
    },
    {
        id:4,
        title:'T4',
        descroption:'d4',
        image:require('../assets/logo-red.png')
    },
]

function MessagesScreen(props) {

    const [messages,setMessages] = useState(initialMessages)
    const [refreshing,setRefreshing] = useState(false);

    const handleDelete = message =>{
        setMessages(messages.filter(m => m.id !== message.id ));
    }

    return (
        <Screen>
            <FlatList 
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={( {item} ) => 
                <ListItem
                title={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={()=>console.log("wooooow",item)}
                renderRightActions={ () => 
                <ListItemDeleteAction onPress={() => handleDelete(item)}/> }
                />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id:4,
                            title:'T4',
                            descroption:'d4',
                            image:require('../assets/logo-red.png')
                        },
                    ])
                }}
            />
        </Screen>
    );
}
export default MessagesScreen;