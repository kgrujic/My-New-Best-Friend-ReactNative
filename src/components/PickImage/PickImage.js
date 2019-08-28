import React,{Component} from 'react';
import {View, Image, Button, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import fallbackImage from '../../assets/paws2.jpg';
import Clarifai from 'clarifai';
// import * as Clarifai from 'clarifai';
// const Clarifai = require('clarifai');

class PickImage extends Component{
    
    clarifaiApp = new Clarifai.App({
        apiKey: '7dedcac98e024ded92fb70bf8c657414'
    });


    pickImageHandler = () =>{
        ImagePicker.showImagePicker({title: "Pick an Image", maxWidth:800,maxHeight:600}, res => {
            const imageData = {
                base64:res.data,
                uri: res.uri
            }
                    
            if(res.didCancel){
                console.log("User cancelled");
            } else if(res.error){
                console.log("Error", res.error);
            } else{
                
                this.identifyImage(imageData)
                    .then(imgDataOrNull => {
                        if (imgDataOrNull) {
                            this.props.onImagePicked(imgDataOrNull)
                        } else {
                           alert('dog not found in image');
                        }
                    });
                
                   
               
            }
        });
    }

    identifyImage = (imageData) => {

       
        return this.clarifaiApp.models.predict(Clarifai.GENERAL_MODEL, {base64: imageData.base64})
            .then((response) =>
                response.outputs[0].data.concepts[0].name === "dog" ? imageData : null
            )
            .catch((err) => alert(err));
    }



    

    render(){
        // const { pickedImage } = this.props;
        const pickedImage = this.props.pickedImage;

        return(
        <View style={styles.container}>
            <View style={styles.placeholder}>
                <Image source={pickedImage || fallbackImage} style={styles.previewImage}/>
            </View>

            <View style={styles.button}>
                <Button title="Pick image!" onPress={this.pickImageHandler} />
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        alignItems:"center"
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

export default PickImage;