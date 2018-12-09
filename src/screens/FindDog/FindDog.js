import React, {Component} from 'react';
import {View,Text} from 'react-native';
import { connect } from 'react-redux';
import {Navigation } from 'react-native-navigation';

import DogList from '../../components/DogList/DogList';

class FindDogScreen extends Component{
    itemSelectedHandler = key => {
        const selDog = this.props.dogs.find(dog => {
            return dog.key === key;
        });
               
        Navigation.push('mainStack', {
            component: {
              name: "MyNewBestFriend.DogDetailScreen",
              passProps:{
                    selectedDog: selDog
               }               
            }
    
          });
       
    };

    render(){
        return(
            <View>
                <DogList dogs={this.props.dogs} onItemSelected={this.itemSelectedHandler} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return{
        dogs: state.dogs.dogs
    };
};

export default connect(mapStateToProps)(FindDogScreen);
//export default FindDogScreen;