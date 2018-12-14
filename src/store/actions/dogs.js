import {ADD_DOG,DELETE_DOG} from './actionTypes';

export const addDog = (dogName,dogAge,dogGender) => {
    return{
        type: ADD_DOG,
        dogName: dogName,
        dogAge: dogAge,
        dogGender:dogGender
    };
};

export const deleteDog = (key) => {
    return{
        type: DELETE_DOG,
        dogKey: key  
    };
}

