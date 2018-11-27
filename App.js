import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import DogInput from './src/components/DogInput/DogInput';
import DogList from './src/components/DogList/DogList';


export default class App extends Component {
  
  state = {
    dogs:[]
  };

  dogAddedHandler = dogName => {   
    this.setState(prevState => {
      return{
        dogs: prevState.dogs.concat(dogName)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <DogInput onDogAdded={this.dogAddedHandler} ></DogInput> 
        <DogList dogs={this.state.dogs}></DogList>
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
});
