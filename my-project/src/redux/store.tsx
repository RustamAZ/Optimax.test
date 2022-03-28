import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import thunkMiddleware from 'redux-thunk';
import persistedReducer from './reducers/reducer';


// const logMiddleware = ({getState}) => (next) => (action) => {
//     console.log(action.type, getState());
//     return next(action);
// };

// const stringMiddleware = () => (next) => (action) => {
//     if (typeof action === 'string') {
//         return next({
//             type: action
//         });
//     }

//     return next(action);
// };

const store = createStore(persistedReducer, applyMiddleware(
    thunkMiddleware,
));

export default store;
export const persistor = persistStore(store);