import {ADD_DOG,DELETE_DOG,SELECT_DOG,DESELECT_DOG} from './actionTypes';

export const addDog = (dogName) => {
    return{
        type: ADD_DOG,
        dogName: dogName
    };
};

export const deleteDog = () => {
    return{
        type: DELETE_DOG,  
    };
}

export const selectDog = (key) => {
    return{
        type:SELECT_DOG,
        dogKey:key  
    };
}

export const deselectDog = () => {
    return{
        type:DESELECT_DOG        
    };
}