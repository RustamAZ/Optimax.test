import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import persistedReducer from './reducers/rootReducer';


const store = createStore(persistedReducer, applyMiddleware(
    thunkMiddleware,
));

export default store;
export const persistor = persistStore(store);