import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image resizeMode="cover" source={props.dogImage} style={styles.dogImage} />
            <Text>{props.dogName + ", " }</Text>
            <Text>{props.city}</Text>
        </View>
    </ TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem:{
        width: "100%",
        padding:10,
        marginBottom:5,
        backgroundColor:"#eee",
        flexDirection: "row",
        alignItems:"center"
    },
    dogImage: {
        marginRight:8,
        height:60,
        width:60
    }
});
export default listItem;