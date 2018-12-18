import {ADD_DOG,DELETE_DOG} from './actionTypes';

export const addDog = (dogName,dogAge,dogGender,location,city,image) => {

    return dispatch => {
        const dogData = {
            name: dogName,
            age: dogAge,
            gender: dogGender,
            location: location,
            city: city
        };
        fetch("https://my-new-best-frie-1544880240576-6ea8c.firebaseio.com/dogs.json",{
            method: "POST",
            body: JSON.stringify(dogData)
        })
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(parsedRes => {
            console.log(parsedRes);
        });
    };
};

export const deleteDog = (key) => {
    return{
        type: DELETE_DOG,
        dogKey: key  
    };
}

