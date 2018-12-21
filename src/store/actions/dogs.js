import {SET_DOGS, REMOVE_DOG} from './actionTypes';
import {uiStartLoading, uiStopLoading, authGetToken} from './index';

export const addDog = (dogName,dogAge,dogGender,location,city,image) => {

    return dispatch => {
        let authToken;
        dispatch(uiStartLoading());
        dispatch(authGetToken())
        .catch(() => {
            alert("No valid token found");
        })
        .then(token => {
            authToken = token;
              return fetch("https://us-central1-my-new-best-frie-1544880240576.cloudfunctions.net/storeImage",{
                    method:"POST",
                    body: JSON.stringify({
                    image: image.base64
                }),
                headers:{
                    "Authorization":"Bearer " + authToken
                }
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
               return fetch("https://my-new-best-frie-1544880240576-6ea8c.firebaseio.com/dogs.json?auth=" + authToken,{
                method: "POST",
                body: JSON.stringify(dogData)
            })
        })     
        .then(res => res.json())
        .then(parsedRes => {
            console.log(parsedRes);
            dispatch(uiStopLoading());
        })
        .catch(err => {
            console.log(err);
            alert("Something went wrong, please try again!");
            dispatch(uiStopLoading());
        });
    };
};

export const getDogs = () => {
    return (dispatch) => {  
        dispatch(authGetToken())
            .then(token =>{
               return fetch("https://my-new-best-frie-1544880240576-6ea8c.firebaseio.com/dogs.json?auth=" + token)
            })
            .catch(() => {
                alert("No valid token found");
            })
            .then(res => res.json())
            .then(parsedRes => {
                const dogs =[];
                for(let key in parsedRes){
                    dogs.push({
                        ...parsedRes[key],
                        image:{
                            uri: parsedRes[key].image
                        },
                        key: key
                    })
                }
                dispatch(setDogs(dogs));
            })
            .catch(err => {
                console.log(err);
                alert("Something went wrong, please try again!");
            });
    };

};

export const setDogs = dogs => {
    return{
        type: SET_DOGS,
        dogs:dogs
    };
};

export const deleteDog = (key) => {
    return (dispatch) => {
        dispatch(authGetToken())
        .catch(() => {
            alert("No valid token found");
        })
            .then(token =>{
                dispatch(removeDog(key));
                return fetch("https://my-new-best-frie-1544880240576-6ea8c.firebaseio.com/dogs/" + key + ".json?auth=" + token, {
                    method:"DELETE"
                }) 
                })  
                .then(res => res.json())
                .then(parsedRes => {
                    console.log("Done");
                })
                .catch(err => {
                    console.log(err);
                    alert("Something went wrong, please try again!");
                });
    };
};

export const removeDog = key => {
    return {
        type: REMOVE_DOG,
        key: key
    };
};

