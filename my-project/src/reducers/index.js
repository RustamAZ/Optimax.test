import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import updateShoppingCart from "./shoppingCart";
import updateCardList from "./cardList";

const persistConfig = {
    key: 'root',
    storage,
}

const reducer = (state, action) => {
    return {
        cardList: updateCardList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
}

const persistedReducer = persistReducer(persistConfig, reducer)

export default persistedReducer;