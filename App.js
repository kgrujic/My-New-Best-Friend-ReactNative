import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {connect} from 'react-redux';

import DogInput from './src/components/DogInput/DogInput';
import DogList from './src/components/DogList/DogList';
import DogDetail from './src/components/DogDetail/DogDetail';
import {addDog,deleteDog,selectDog,deselectDog} from './src/store/actions/index';

class App extends Component {
  
  dogAddedHandler = dogName => {   
    this.props.onAddDog(dogName);
    console.log('dog added');
  };

  dogDeletedHandler = () => {
    this.props.onDeleteDog();
  }

  modalClosedHandler = () => {
    this.props.onDeselectDog();
  }

  dogSelectedHandler = key => {
    this.props.onSelectDog(key);
  };

  render() {
    return (
      <View style={styles.container}>
        <DogDetail 
          selectedDog={this.props.selectedDog}
          onItemDeleted={this.dogDeletedHandler} 
          onModalClosed={this.modalClosedHandler}
        />
        <DogInput onDogAdded={this.dogAddedHandler} ></DogInput> 
        <DogList 
          dogs={this.props.dogs}
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

const mapStateToProps = state => {
  return{
    dogs: state.dogs.dogs,
    selectedDog: state.dogs.selectedDog
  };
};

const mapDispatchToProps = dispatch => {
  return{
    onAddDog:(name) => dispatch(addDog(name)),
    onDeleteDog: () => dispatch(deleteDog()),
    onSelectDog: (key) => dispatch(selectDog(key)),
    onDeselectDog: () => dispatch(deselectDog())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
