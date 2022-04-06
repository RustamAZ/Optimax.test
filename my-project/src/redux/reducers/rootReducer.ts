import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { AppAction } from '../../types/redux/actionTypes';

import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = (state: any, action: any): any  => {
    return {
        productList: productReducer(state, action),
        shoppingCart: cartReducer(state, action)
    }
}



const persistedReducer = persistReducer(persistConfig, rootReducer);

export type AppState = ReturnType<typeof rootReducer>
export default persistedReducer;