import React, {Component} from 'react';
import {View,Text,StyleSheet,ImageBackground, TouchableOpacity, Animated} from 'react-native';
import { connect } from 'react-redux';
import {Navigation } from 'react-native-navigation';
import backgroundImage from '../../assets/kami.jpg';

import DogList from '../../components/DogList/DogList';

class FindDogScreen extends Component{

    state = {
        dogsLoaded:false,
        removeAnim: new Animated.Value(1)
    }

    constructor(props){
        super(props);
        this.isSideDrawerVisible = false;
        Navigation.events().bindComponent(this);
    }

    navigationButtonPressed({ buttonId }) {
        if (buttonId === "openSideDrawer") {
            (!this.isSideDrawerVisible) ? this.isSideDrawerVisible = true : this.isSideDrawerVisible = false
            Navigation.mergeOptions(this.props.componentId, {
             sideMenu: {
               left: {
                 visible: this.isSideDrawerVisible,
               }
             }
           });
          }
    }

    dogsLoadedHandler = () => {

    }

    dogsSearchHandler = () => {
       Animated.timing(this.state.removeAnim,{
            toValue:0,
            duration: 500,
            useNativeDriver:true
       }).start(() => {
           this.setState({
               dogsLoaded:true
           });
           this.dogsLoadedHandler();
       });
      
    };

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
        let content = (
           <Animated.View
            style={{
                opacity:this.state.removeAnim,
                transform:[
                    {
                        scale: this.state.removeAnim.interpolate({
                            inputRange:[0, 1],
                            outputRange: [12,1]
                        })
                    }
                ]
            }}>
                <TouchableOpacity onPress = {this.dogsSearchHandler}>             
                    <View style={styles.searchButton}>
                        <Text style={styles.searchButtonText}>Find Dog To Adopt</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
           
        );

        if(this.state.dogsLoaded){
            content = (          
                <DogList dogs={this.props.dogs} onItemSelected={this.itemSelectedHandler} />             
           
        );
      }
        return(
            <View style={this.state.dogsLoaded ? null : styles.buttonContainer}>
                {content}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return{
        dogs: state.dogs.dogs
    };
};

const styles = StyleSheet.create({
    backgroundImage:{
        width:"100%",
        flex:1,
        
    },
    buttonContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    
    searchButton:{
        borderColor:"orange",
        borderWidth:3,
        borderRadius:50,
        padding:20,
    
    },
    searchButtonText:{
        color:"orange",
        fontWeight:"bold",
        fontSize:26
    }
    
});

export default connect(mapStateToProps)(FindDogScreen);
//export default FindDogScreen;