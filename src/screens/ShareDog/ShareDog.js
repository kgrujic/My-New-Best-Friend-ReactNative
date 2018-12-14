import React, {Component} from 'react';
import { View,Text, TextInput, Button, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import { addDog } from '../../store/actions/index';
import DogInput from '../../components/DogInput/DogInput';
import MainText from  '../../components/UI/MainText/MainText';
import HeadingText from  '../../components/UI/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
import backgroundImage from '../../assets/paws4.jpg';

class ShareDogScreen extends Component{
    state = {
        dogName: "",
        dogAge: "",
        dogGender:""
    };

    dogNameChangedHandler = val => {
        this.setState({
           dogName:val 
        });
    }
    dogAgeChangedHandler = val => {
        this.setState({
           dogAge:val 
        });
    }

    dogGenderChangedHandler = (itemValue, itemIndex) =>{
        this.setState({
            dogGender: itemValue
        });
    }
  
    dogAddedHandler = () => {
        if(this.state.dogName.trim() !== ""){
            this.props.onAddDog(this.state.dogName,this.state.dogAge,this.state.dogGender);
        }      
    }

    render(){
        return(
            <ScrollView>
               <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <MainText> 
                        <HeadingText>
                            Share a Dog for Adoption 
                        </HeadingText>
                    </MainText>

                   <PickImage />

                   <PickLocation />
                    
                    <DogInput 
                        dogName ={this.state.dogName} 
                        dogAge ={this.state.dogAge}
                        dogGender={this.state.dogGender}
                        onDogNameChangedText={this.dogNameChangedHandler}
                        onDogAgeChangedText ={this.dogAgeChangedHandler}
                        onDogGenderChanged = {this.dogGenderChangedHandler}
                    />
                    <View style={styles.button}>
                        <Button title="Share dog" onPress={this.dogAddedHandler}/>
                    </View>
                </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{ 
        flex:1,
        alignItems:"center"
    },
    backgroundImage:{
        width:"100%",
        flex:1
    },
    placeholder: {
        borderWidth:1,
        borderColor:"black",
        backgroundColor:"#eee",
        width:"80%",
        height:150
    },
    button:{
        margin:5
    },
    previewImage:{
        width:"100%",
        height:"100%"
    }
});

const mapDispatchToProps = dispatch => {
    return{
        onAddDog: (dogName,dogAge,dogGender) => dispatch(addDog(dogName,dogAge,dogGender))
    };
};

 export default connect(null, mapDispatchToProps)(ShareDogScreen);
//export default ShareDogScreen;