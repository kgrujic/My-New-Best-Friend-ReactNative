import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import dogsReducer from './reducers/dogs';
import uiReducer from './reducers/ui';
import authReducer from './reducers/auth';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    dogs: dogsReducer,
    ui: uiReducer,
    auth: authReducer
});

let composeEnhancers = compose;

if(__DEV__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;