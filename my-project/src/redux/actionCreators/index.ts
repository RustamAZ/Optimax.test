import { AppAction } from './../../types/redux/actionTypes';
import { Product, ProductList } from './../../types/components/productList';

import {
    FETCH_PRODUCTS_REQUESTED,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    PRODUCT_ADDED_TO_CART,
    PRODUCT_DECREASE_COUNT,
    PRODUCT_REMOVE_FROM_CART,
    ADD_NEW_PRODUCT_TO_CART
} from '../actions';
import { NewProduct } from '../../types/components/shoppingCart';
import  {Dispatch} from 'redux';
import { StoreService } from '../../types/services/storeServicesType';


const productsRequested = (): AppAction => {
    return {
        type: FETCH_PRODUCTS_REQUESTED,
    }
}

const productsLoaded = (products: Product[]): AppAction => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    };
};

const productsError = (error: string): AppAction => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}

const productAddedToCart = (productId: number): AppAction => {
    return {
        type: PRODUCT_ADDED_TO_CART,
        payload: productId
    }
}

const productRemoveFromCart = (productId: number): AppAction => {
    return {
        type: PRODUCT_REMOVE_FROM_CART,
        payload: productId
    }
}

const productDecreaseCount = (productId: number): AppAction => {
    return {
        type: PRODUCT_DECREASE_COUNT,
        payload: productId
    }
}

const addNewProductToCart = (newProduct: NewProduct): AppAction => {
    return {
        type: ADD_NEW_PRODUCT_TO_CART,
        payload: newProduct
    }
}

const fetchProducts = (storeService: StoreService) => () => (dispatch: Dispatch<AppAction>) => {
    dispatch(productsRequested());

    storeService.getProducts().then((res: any) => res.json()).then(
        (result: any) => {
            dispatch(productsLoaded(result.nvidia));
        },
        (error: string) => {
            dispatch(productsError(error));
        }
    );
}

export {
    fetchProducts,
    productAddedToCart,
    productRemoveFromCart,
    productDecreaseCount,
    addNewProductToCart,
};