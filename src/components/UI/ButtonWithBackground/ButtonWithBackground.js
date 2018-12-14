import React from 'react';
import {Platform,TouchableOpacity,TouchableNativeFeedback, Text, View, StyleSheet } from 'react-native';

const buttonWithBackground = props => {
    if(Platform.OS === 'android'){
        return( 
            <TouchableNativeFeedback onPress={props.onPress}>
                <View style={[styles.button,{backgroundColor: props.color}]}>
                    <Text>{props.children}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
   
  
};

const styles = StyleSheet.create({
    button:{
      padding:10,
      margin:5,
      borderWidth:1,
      borderColor: "black"

        
    }
});
export default buttonWithBackground;