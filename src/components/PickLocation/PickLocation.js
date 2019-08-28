import React,{Component} from 'react';
import MapView from 'react-native-maps';
import {View, Image, Button, StyleSheet, Text, Dimensions} from 'react-native';


class PickLocation extends Component{
    
    componentWillMount(){
        this.reset();
    }

    reset = () => {
        this.setState({
            focusedLocation:{
                latitude:45.2671,
                longitude: 19.8335,
                latitudeDelta:0.0122,
                longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0122
    
            },
            locationChosen:false
        });
    }

    pickLocationHandler = event => {
        const coords = event.nativeEvent.coordinate;
        this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude:coords.latitude,
            longitude:coords.longitude
        });
        this.setState(prevState => {
            return{
                focusedLocation:{
                    ...prevState.focusedLocation,
                    latitude: coords.latitude,
                    longitude: coords.longitude
                },
                locationChosen:true
            };
        });
        this.props.onLocationPick({
            // love you <3 love you too bubu <3 prepao si me hahaha gledam sta se desava
            // nisam to ja to je bill gates iz groba huhuhuhuh
            // nastavio je da zivi u window racunarima nooooo pojebalo se nesto sa ovim preimenovanjem 
            // kako bebo nzm negde se iygleda referencira na to sad cu da vidim a onaj object je undefined
            latitude:coords.latitude,
            longitude:coords.longitude
        });
    };

    getLocationHandler = () =>{
        navigator.geolocation.getCurrentPosition(pos => {
            const coordsEvent = {
                nativeEvent:{
                    coordinate:{
                        latitude:pos.coords.latitude,
                        longitude:pos.coords.longitude
                    }
                }
            };
            this.pickLocationHandler(coordsEvent);
            console.log(pos.coords.latitude+","+pos.coords.longitude);
        },
        err =>{
            console.log(err);
            alert("fetching the position failed");
        });
    }


    render(){
        let marker = null;
        if(this.state.locationChosen){
            marker = <MapView.Marker coordinate={this.state.focusedLocation}/>
        } 
        return(
        <View style={styles.container}>
          <MapView 
                initialRegion={this.state.focusedLocation}
                region={!this.state.locationChosen ? this.state.focusedLocation : null}
                style={styles.map}
                onPress={this.pickLocationHandler}
                ref={ref => this.map = ref}>
                    {marker}
            </MapView>

            <View style={styles.button}>
                <Button title="Locate Me" onPress={this.getLocationHandler} />
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
    map: {
        
        width:"100%",
        height:250
    },
    button:{
        margin:5
    },

});

export default PickLocation;