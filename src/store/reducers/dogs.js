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
                    image: {
                      uri: "https://i.pinimg.com/564x/b1/af/22/b1af22d4d1b0f7164472bcb3813ca647.jpg"
          
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