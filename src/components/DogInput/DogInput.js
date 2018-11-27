import React, {Component} from 'react';
import { View, StyleSheet,  TextInput, Button } from 'react-native';

class PlaceInput extends Component{
  
  state = {
      dogName: ""
  };

  dogNameChangedHandler = val => {
      this.setState({
      dogName:val
    });
  };


  dogSubmitHandler = () => {
    if(this.state.dogName.trim() === ""){
        return;
    }
      this.props.onDogAdded(this.state.dogName);
  };

  render(){
      return (
        <View style={styles.inputContainer}>
            <TextInput     
                placeholder="An awesome dog"
                value={this.state.dogName}
                onChangeText={this.dogNameChangedHandler}
                style={styles.dogInput}
            />
            
            <Button title="Add" 
              style={styles.dogButton} 
              onPress={this.dogSubmitHandler}/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    inputContainer:{
        //flex: 1,
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
      },
      dogInput:{
        width:"70%"
      },
      dogButton:{
        width:"30%"
      },
});

export default PlaceInput;