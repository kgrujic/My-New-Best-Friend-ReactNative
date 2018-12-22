import React,{Component} from 'react';
import {Platform,ScrollView ,View, Image, Text, Button, StyleSheet, TouchableOpacity,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { deleteDog } from "../../store/actions/index";
import { Navigation } from 'react-native-navigation';
import MapView from 'react-native-maps';
 
class DogDetail extends Component{

    state={
        viewMode:"portrait"
    };

    constructor(props){
        super(props);
        Dimensions.addEventListener("change",this.updateStyles);
    }

    componentWillUnmount(){
        Dimensions.removeEventListener("change",this.updateStyles);
    }

    updateStyles = dims => {
        this.setState({
            viewMode: dims.window.height > 500 ? "portrait" : "landscape"
        });
    };

    dogDeletedHandler = () => {
        this.props.onDeleteDog(this.props.selectedDog.key);
        console.log(this.props.selectedDog);
        Navigation.pop('mainStack');
    }

    render(){
        let isLocationSelected = 
        (<MapView
            initialRegion={{
                ...this.props.selectedDog.location,
                latitudeDelta:0.0122,
                longitudeDelta:
                    Dimensions.get("window").width / 
                    Dimensions.get("window").height * 0.0122
            }}
            style={styles.map}>
            <MapView.Marker coordinate={this.props.selectedDog.location} />
        </MapView>);

        if(this.props.selectedDog.location == null){
            isLocationSelected= 
            (<View>
                <Text style={styles.ageGenderText}> Location is unknown </Text>
            </View>);
        }
        return(
        <ScrollView style={[
                styles.container,
                this.state.viewMode === "portrait"
                ? styles.portraitContainer
                : styles.landscapeContainer
            ]}>

        <View style={styles.subContainer}>
                    <View>
                        <Text style={styles.dogName}>{this.props.selectedDog.name}</Text>
                            <View style={styles.ageGenderContainer}>
                                <Text style={styles.ageGenderText}>Age: {this.props.selectedDog.age}</Text>
                                <Text style={styles.ageGenderText}>Gender: {this.props.selectedDog.gender}</Text>
                            </View>
                    </View>

                    <View>
                        <TouchableOpacity onPress={this.dogDeletedHandler}>
                            <View style={styles.deleteButton}>
                                <Icon size={30} name={Platform.OS === 'android' ? "md-trash" :"ios-trash"} color="red" />
                            </View>
                        </TouchableOpacity>
                    </View>
            </View>         

            <View style={styles.dogDetailContainer}>
                <View style={styles.subContainer}>
                    <Image source={this.props.selectedDog.image} style={styles.dogImage}/>
                </View>

                
                <View style={styles.subContainer}>
                   {isLocationSelected}
                </View>

          
             </View>

           
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        margin:22,
        flex:1
    },
    portraitContainer:{
        flexDirection:"column"
    },
    landscapeContainer:{
        flexDirection:"row"
    },
    dogDetailContainer:{
        flex:2
    },
    dogImage:{
        width:"100%",
        height:300
    },
    dogName:{
        fontWeight: "bold",
        textAlign:"center",
        fontSize:28
    },
    deleteButton:{
        alignItems:"center"
    },
    map:{
        width:"100%",
        height:250,
    },
    subContainer:{
        flex:1
    },
    ageGenderContainer:{
        flexDirection:"column",
        alignItems:"center",
             
    },
    ageGenderText:{
        fontSize:15,
        fontWeight:"bold"
    }
});

const mapDispatchToProps = dispatch => {
    return{
        onDeleteDog:(key) => dispatch(deleteDog(key))
    };
};

export default connect(null, mapDispatchToProps)(DogDetail);