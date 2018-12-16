import {ADD_DOG,DELETE_DOG} from './actionTypes';

export const addDog = (dogName,dogAge,dogGender,location,image) => {
    return{
        type: ADD_DOG,
        dogName: dogName,
        dogAge: dogAge,
        dogGender:dogGender,
        location: location,
        image:image
    };
};

export const deleteDog = (key) => {
    return{
        type: DELETE_DOG,
        dogKey: key  
    };
}

