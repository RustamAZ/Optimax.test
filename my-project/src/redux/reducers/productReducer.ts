import { AppState } from './rootReducer';
import { ProductList } from "../../types/components/productList";
import { ProductAction } from "../../types/redux/actionTypes";

import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_REQUESTED } from "../../redux/actions"; 


const productReducer = (state: AppState, action: ProductAction): ProductList => {
    if (state === undefined) {
        return {
            products: [],
            loading: true,
            error: null,
        }
    }

    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {
                products: action.payload,
                loading: false,
                error: null
            };
        case FETCH_PRODUCTS_REQUESTED:
            return {
                products: [],
                loading: true,
                error: null
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                products: [],
                loading: false,
                error: action.payload
            };
        default:
            return state.productList;
    }
}

export default productReducer;