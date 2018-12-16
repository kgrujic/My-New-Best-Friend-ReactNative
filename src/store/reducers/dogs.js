import { ADD_DOG, DELETE_DOG} from "../actions/actionTypes";

const initialState = {
    dogs:[]
   
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_DOG: 
            return {
                ...state,
                dogs: state.dogs.concat({
                    key: Math.random(),
                    name:action.dogName,
                    age: action.dogAge,
                    gender: action.dogGender,
                    location: action.location,
                    image: {
                      uri: action.image.uri
          
                    }
                  })
            };
        
        case DELETE_DOG:
            return{
                ...state,
                dogs: state.dogs.filter(dog => {
                    return dog.key !== action.dogKey;
                  })               
                
            };
        
            
        default: 
            return state;
        
    }
};

export default reducer;