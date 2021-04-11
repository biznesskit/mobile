import React from 'react';
import { Image, View,StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors'
import ListItem from '../components/ListItem'
function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/me.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jacket For sale</AppText>
                <AppText style={styles.price}>KES 100</AppText>
            </View>
            <View style={styles.userContainer}>
                <ListItem 
                image={require("../assets/me.jpg")}
                title="kim"
                subTitle="5 listings"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer:{
        padding:20,
    },
    image:{
        width:'100%',
        height:300,
    },
    title:{
        fontSize:24,
        fontWeight:"500"
    },
    price:{
        color:colors.secondary,
        fontWeight:'bold',
        fontSize:20,
        marginVertical:10,
    },
    userContainer:{
        marginVertical:40,
        paddingLeft:20,
    }
})
export default ListingDetailsScreen;