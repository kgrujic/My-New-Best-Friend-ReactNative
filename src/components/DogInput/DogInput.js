import React, {Component} from 'react';
import { View, StyleSheet,  TextInput, Button, Text, Picker } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';

const dogInput = props => (   
<View>
  <View>
    <DefaultInput 
        placeholder="Dog Name" 
        value={props.dogName.value}
        valid={props.dogName.valid}
        touched={props.dogName.touched}
        onChangeText={props.onDogNameChangedText}
      />

      <DefaultInput    
        placeholder="Dog Age"
        value={props.dogAge.value}
        valid={props.dogAge.valid}
        touched={props.dogAge.touched}
        onChangeText={props.onDogAgeChangedText}              
      />
  </View>

  <View style={styles.radioContainer}>
        <Picker       
          style={{ height: 50, width: 200 }}
          selectedValue={props.dogGender.value}
          onValueChange={props.onDogGenderChanged}
          >
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
  </View>  
</View>
);
  
     
                    

const styles = StyleSheet.create({
      radioContainer:{
        width:"100%",
        flexDirection:"row",
        //justifyContent:"space-between",
        alignItems:"center"
      },
     
});

export default dogInput;