import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit'
import updateShoppingCart from "./shoppingCart";
import updateProductList from "./cardList";
import { Statement } from 'typescript';



const persistConfig = {
    key: 'root',
    storage,
}

const reducer = (state, action) => {
    return {
        productList: updateProductList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
}

const persistedReducer = persistReducer(persistConfig, reducer)

export default persistedReducer;