import React,{Component} from 'react';
import { FlatList, StyleSheet, TextInput, View} from 'react-native';
import { connect } from 'react-redux';
import {Navigation} from 'react-native-navigation';
import {getDogs} from '../../store/actions/index';

import ListItem from '../ListItem/ListItem';

class DogList extends Component{

    state = {
        searchValue: ""
    }


    render(){
        const { searchValue } = this.state;
       
        return(
            <View>
                    <TextInput
                        placeholder="Search by city"
                        style={{height: 40, marginTop: 8, marginBottom: 8 }}
                        onChangeText={(text) => {
                            this.setState({searchValue:text})
                        }
                    }
                        value={searchValue}
                    />     
                    <FlatList style={styles.listContainer}
                            data={this.props.dogs.filter(({ city }) => city.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))}
                            renderItem={(info) =>(
                                <ListItem 
                                    dogName={info.item.name}
                                    dogImage = {info.item.image}
                                    city = {info.item.city}
                                    onItemPressed={() => this.props.onItemSelected(info.item.key)}
                            />
                        )}
                    />
              
              </View>
        )
    }
    
};
// const dogList = (props) => {
//     return(
//         <FlatList style={styles.listContainer}
//             data={props.dogs}
//             renderItem={(info) =>(
//                 <ListItem 
//                     dogName={info.item.name}
//                     dogImage = {info.item.image}
//                     city = {info.item.city}
//                     onItemPressed={() => props.onItemSelected(info.item.key)}
//                 />
//             )}
//         />
//     );
// };

const styles = StyleSheet.create({
    listContainer:{
        width:"100%"
    },
   
});

const mapStateToProps = state => {
    return{
        ...state,
        dogs: state.dogs.dogs.reverse()
    };
};



 
export default connect(mapStateToProps)(DogList);