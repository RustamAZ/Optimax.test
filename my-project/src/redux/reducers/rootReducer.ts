import { combineReducers } from 'redux';
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";


const rootReducer: any = combineReducers({
    productList: productReducer,
    shoppingCart: cartReducer
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;