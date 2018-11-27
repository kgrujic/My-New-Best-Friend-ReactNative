import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {
  state = {
    dogName: "",
    dogs:[]
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

    this.setState(prevState => {
      return{
        dogs: prevState.dogs.concat(prevState.dogName)
      };
    });
  };

  render() {
    const dogsOutput = this.state.dogs.map((dog,i) => (
      <Text key={i}>{dog}</Text>
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput     
              placeholder="An awesome dog"
              value={this.state.dogName}
              onChangeText={this.dogNameChangedHandler}
              style={styles.dogInput}
            />
            <Button title="Add"  style={styles.dogButton} onPress={this.dogSubmitHandler}/>
          </View>
          <View>
            {dogsOutput}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
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
