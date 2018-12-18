import React,{Component} from 'react';
import { FlatList, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

import ListItem from '../ListItem/ListItem';

class DogList extends Component{

  

    render(){
       
        return(
        
                <FlatList style={styles.listContainer}
                        data={this.props.dogs}
                        renderItem={(info) =>(
                            <ListItem 
                                dogName={info.item.name}
                                dogImage = {info.item.image}
                                city = {info.item.city}
                                onItemPressed={() => this.props.onItemSelected(info.item.key)}
                            />
                    )}
                 />
              
              
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