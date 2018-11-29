import { ADD_DOG, DELETE_DOG, SELECT_DOG, DESELECT_DOG } from "../actions/actionTypes";

const initialState = {
    dogs:[],
    selectedDog: null
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_DOG: 
            return {
                ...state,
                dogs: state.dogs.concat({
                    key: Math.random(),
                    name:action.dogName,
                    image: {
                      uri: "https://i.pinimg.com/564x/b1/af/22/b1af22d4d1b0f7164472bcb3813ca647.jpg"
          
                    }
                  })
            };
        
        case DELETE_DOG:
            return{
                ...state,
                dogs: state.dogs.filter(dog => {
                    return dog.key !== state.selectedDog.key;
                  }),
                  selectedDog:null
                
            };
        
        case SELECT_DOG:
            return{
                ...state,
                selectedDog: state.dogs.find(dog => {
                    return dog.key === action.dogKey;
                  })
            };
        
        case DESELECT_DOG:
            return{
                ...state,
                selectedDog: null
            };
            
        default: 
            return state;
        
    }
};

export default reducer;