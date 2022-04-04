import store from "../../redux/store"

import { ProductList } from '../components/productList';
import { ShoppingCart } from '../components/shoppingCart';


export interface RootState {
    state: AppState
}

export interface AppState {
    productList: ProductList,
    shoppingCart: ShoppingCart
}

export type AppDispatch = typeof store.dispatch
