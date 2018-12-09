import React, {Component} from 'react';
import { View,Text } from 'react-native';
import { connect } from 'react-redux';

import DogInput from '../../components/DogInput/DogInput';
import { addDog } from '../../store/actions/index';

class ShareDogScreen extends Component{
    dogAddedHandler = dogName => {
        this.props.onAddDog(dogName);
    }

    render(){
        return(
            <View>
                <DogInput onDogAdded={this.dogAddedHandler} />
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAddDog: (dogName) => dispatch(addDog(dogName))
    };
};

 export default connect(null, mapDispatchToProps)(ShareDogScreen);
//export default ShareDogScreen;