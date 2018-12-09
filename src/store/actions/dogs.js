import {ADD_DOG,DELETE_DOG} from './actionTypes';

export const addDog = (dogName) => {
    return{
        type: ADD_DOG,
        dogName: dogName
    };
};

export const deleteDog = (key) => {
    return{
        type: DELETE_DOG,
        dogKey: key  
    };
}

