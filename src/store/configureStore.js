import {createStore, combineReducers} from 'redux';
import dogsReducer from './reducers/dogs';

const rootReducer = combineReducers({
    dogs: dogsReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;