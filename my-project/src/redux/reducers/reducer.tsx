import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import updateShoppingCart from "./shoppingCart";
import updateProductList from "./productList";

import { State } from '../../types/state';

const persistConfig = {
    key: 'root',
    storage,
}

const reducer = (state: State, action) => {
    return {
        productList: updateProductList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
}

const persistedReducer = persistReducer(persistConfig, reducer)

export default persistedReducer;