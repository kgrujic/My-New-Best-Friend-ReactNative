import React, {Component} from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ImageBackground, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { addDog } from '../../store/actions/index';
import DogInput from '../../components/DogInput/DogInput';
import MainText from  '../../components/UI/MainText/MainText';
import HeadingText from  '../../components/UI/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
import backgroundImage from '../../assets/paws4.jpg';
import validate from "../../utility/validation";
import Geocoder from 'react-native-geocoder-reborn';


class ShareDogScreen extends Component{
    state = {
        controls:{
            dogName: {
                value:"",
                valid:false,
                touched:false,
                validationRules:{
                    notEmpty:true
                }
            },
            dogAge:{
                value:"",
                valid:false,
                touched:false,
                validationRules:{
                    isNumber:true
                }
            },
            dogGender:{
                value:""
            },
            location:{
                value:null,
                valid:false,            
            },
            city: "",
            image:{
                value:null,
                valid:false
            } 
    }   
};


    dogNameChangedHandler = val => {
        this.setState(prevState => {
            return{
                controls:{
                    ...prevState.controls,
                    dogName:{
                        ...prevState.controls.dogName,
                        value:val,
                        valid:validate(val,prevState.controls.dogName.validationRules),
                        touched:true
                    }
                }
            };
        });
        console.log(this.state.controls.dogName.value);
    }
    dogAgeChangedHandler = val => {
        // this.setState({
        //     controls:{ 
        //         dogAge:val 
        //     }
          
        // });
        this.setState(prevState => {
            return{
                controls:{
                    ...prevState.controls,
                    dogAge:{
                        ...prevState.controls.dogAge,
                        value:val,
                        valid:true,
                        touched:true                  
                    }
                }
            };
        });
        console.log(this.state.controls.dogAge.value);
    }

    dogGenderChangedHandler = (itemValue, itemIndex) =>{
        // this.setState({
        //     controls:{
        //         dogGender: {
        //            value: itemValue
        //         }
        //     }
           
        // });
        this.setState(prevState => {
            return{
                controls:{
                    ...prevState.controls,
                    dogGender:{
                        ...prevState.controls.dogGender,
                        value:itemValue,
                    
                    }
                }
            };
        });
    }

    locationPickedHandler = location =>
        Geocoder.geocodePosition({lat:location.latitude,lng:location.longitude}).then((res) => {
            
            this.setState(prevState => {  
                return{
                controls:{
                    ...prevState.controls,
                    location:{
                        value: location,
                        valid:true,
                       
                    },
                    city: res[3].locality || res[3].adminArea,
                }
            };                         
        });
       console.log(this.state.controls.city);
    })
    .catch(console.log);

    imagePickedHandler = image => {
        this.setState(prevState =>{
            return{
                controls:{
                    ...prevState.controls,
                    image:{
                        value:image,
                        valid:true
                    }
                }
            };
        });
    }
  
    dogAddedHandler = () => {
       
        this.props.onAddDog(this.state.controls.dogName.value,this.state.controls.dogAge.value,this.state.controls.dogGender.value, this.state.controls.location.value,this.state.controls.city,this.state.controls.image.value);
      
    }

    render(){
        let submitButton =  (<Button title="Share dog" onPress={this.dogAddedHandler} disabled={!this.state.controls.dogName.valid} />);
        if(this.props.isLoading){
           submitButton = <ActivityIndicator/>
        }
        return(
            <ScrollView>
               <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <MainText> 
                        <HeadingText>
                            Share a Dog for Adoption 
                        </HeadingText>
                    </MainText>

                   <PickImage onImagePicked={this.imagePickedHandler} />

                   <PickLocation onLocationPick={this.locationPickedHandler}/>
                    
                    <DogInput 
                        dogName ={this.state.controls.dogName} 
                        dogAge ={this.state.controls.dogAge}
                        dogGender={this.state.controls.dogGender}
                        onDogNameChangedText={this.dogNameChangedHandler}
                        onDogAgeChangedText ={this.dogAgeChangedHandler}
                        onDogGenderChanged = {this.dogGenderChangedHandler}
                    />
                    <View style={styles.button}>
                       {submitButton}
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

const mapStateToProps = state => {
    return{
        isLoading: state.ui.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onAddDog: (dogName,dogAge,dogGender,location,city,image) => dispatch(addDog(dogName,dogAge,dogGender,location,city,image))
    };
};

 export default connect(mapStateToProps, mapDispatchToProps)(ShareDogScreen);
//export default ShareDogScreen;