import {SET_DOGS, REMOVE_DOG,DOG_ADDED, START_ADD_DOG } from "../actions/actionTypes";

const initialState = {
    dogs:[],
    dogAdded: false
   
};

const reducer = (state = initialState, action) => {
    switch(action.type){
          
        case SET_DOGS:
            return {
                ...state,
                dogs: action.dogs
            }
        case REMOVE_DOG:
            return{
                ...state,
                dogs: state.dogs.filter(dog => {
                    return dog.key !== action.key;
                  })                        
            };
        case DOG_ADDED:
            return {
                ...state,
                dogAdded:true
            }
        case START_ADD_DOG:
            return{
                ...state,
                dogAdded:false
            }
                 
        default: 
            return state;
        
    }
};

export default reducer;