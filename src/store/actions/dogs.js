import {ADD_DOG,DELETE_DOG} from './actionTypes';
import {uiStartLoading, uiStopLoading} from './index';
export const addDog = (dogName,dogAge,dogGender,location,city,image) => {

    return dispatch => {
        dispatch(uiStartLoading());
        fetch("https://us-central1-my-new-best-frie-1544880240576.cloudfunctions.net/storeImage",{
            method:"POST",
            body: JSON.stringify({
                image: image.base64
            })
        })
            .catch(err => {
                console.log(err);
                alert("Something went wrong, please try again!");
                dispatch(uiStopLoading());
            })
            .then(res => res.json())
            .then(parsedRes => {
                const dogData = {
                    name: dogName,
                    age: dogAge,
                    gender: dogGender,
                    location: location,
                    city: city,
                    image: parsedRes.imageUrl
                };
               return fetch("https://my-new-best-frie-1544880240576-6ea8c.firebaseio.com/dogs.json",{
                method: "POST",
                body: JSON.stringify(dogData)
            })
        })     
        .catch(err => {
            console.log(err);
            alert("Something went wrong, please try again!");
            dispatch(uiStopLoading());
        })
        .then(res => res.json())
        .then(parsedRes => {
            console.log(parsedRes);
            dispatch(uiStopLoading());
        });
    };
};

export const deleteDog = (key) => {
    return{
        type: DELETE_DOG,
        dogKey: key  
    };
}

