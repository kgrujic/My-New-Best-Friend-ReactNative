import {SET_DOGS, REMOVE_DOG } from "../actions/actionTypes";

const initialState = {
    dogs:[]
   
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
                 
        default: 
            return state;
        
    }
};

export default reducer;