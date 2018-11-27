import React from 'react';
import { View, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
    const dogsOutput = props.dogs.map((dog,i) => (
        <ListItem key={i} dogName={dog}></ListItem>
    ));

    return(
        <View style={styles.listContainer}>
            {dogsOutput}
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer:{
        width:"100%"
    }
});
 
export default placeList;