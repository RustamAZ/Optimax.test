import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/rootReducer';


// const store = createStore(rootReducer, applyMiddleware(
//     thunkMiddleware,
// ));
const middleware = [
    thunkMiddleware,
];

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware)
))

export default store;