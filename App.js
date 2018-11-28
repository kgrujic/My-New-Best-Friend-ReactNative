import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import DogInput from './src/components/DogInput/DogInput';
import DogList from './src/components/DogList/DogList';
import DogDetail from './src/components/DogDetail/DogDetail';

export default class App extends Component {
  
  state = {
    dogs:[],
    selectedDog: null
  };

  dogAddedHandler = dogName => {   
    this.setState(prevState => {
      return{
        dogs: prevState.dogs.concat({
          key: Math.random(),
          name:dogName,
          image: {
            uri: "https://i.pinimg.com/564x/b1/af/22/b1af22d4d1b0f7164472bcb3813ca647.jpg"

          }
        })
      };
    });
  };

  placeDeletedHandler = () => {
     this.setState(prevState => {
        return{
          dogs: prevState.dogs.filter(dog => {
            return dog.key !== prevState.selectedDog.key;
          }),
          selectedDog:null
        };
    });
  }

  modalClosedHandler = () => {
      this.setState({
        selectedDog: null
      });
  }

  dogSelectedHandler = key => {
    this.setState(prevState => {
        return{
          selectedDog: prevState.dogs.find(dog => {
            return dog.key === key;
          })
        };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <DogDetail selectedDog={this.state.selectedDog}  onItemDeleted={this.placeDeletedHandler} onModalClosed={this.modalClosedHandler}/>
        <DogInput onDogAdded={this.dogAddedHandler} ></DogInput> 
        <DogList 
          dogs={this.state.dogs}
          onItemSelected = {this.dogSelectedHandler}
        />
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
