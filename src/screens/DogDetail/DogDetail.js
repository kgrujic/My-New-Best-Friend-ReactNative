import React,{Component} from 'react';
import {Platform, View, Image, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { deleteDog } from "../../store/actions/index";
import { Navigation } from 'react-native-navigation';

 
class DogDetail extends Component{

    dogDeletedHandler = () => {
        this.props.onDeleteDog(this.props.selectedDog.key);
        console.log(this.props.selectedDog);
        Navigation.pop('mainStack');
    }

    render(){
        return(
            <View style={styles.container}>
            <View>
                <Image source={this.props.selectedDog.image} style={styles.dogImage}/>
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
        );
    }
}

const styles = StyleSheet.create({
    container:{
        margin:22,
    },
    dogImage:{
        width:"100%",
        height:200
    },
    dogName:{
        fontWeight: "bold",
        textAlign:"center",
        fontSize:28
    },
    deleteButton:{
        alignItems:"center"
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