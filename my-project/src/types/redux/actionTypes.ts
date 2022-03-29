import { NewProduct } from "../components/shoppingCart";
import { Product } from "../components/productList";
import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_REQUESTED,
PRODUCT_ADDED_TO_CART, PRODUCT_DECREASE_COUNT, PRODUCT_REMOVE_FROM_CART, ADD_NEW_PRODUCT_TO_CART} from "../../redux/actions"; 

interface FetchProductRequest {
    type: typeof FETCH_PRODUCTS_REQUESTED,
}

interface FetchProductSuccess {
    type: typeof FETCH_PRODUCTS_SUCCESS,
    payload: Product[]
}

interface FetchProductFailure {
    type: typeof FETCH_PRODUCTS_FAILURE,
    payload: string
}

interface ProductAddedToCart {
    type: typeof PRODUCT_ADDED_TO_CART,
    payload: number
}

interface ProductDecreaseCount {
    type: typeof PRODUCT_DECREASE_COUNT,
    payload: number
}

interface ProductRemoveFromCart {
    type: typeof PRODUCT_REMOVE_FROM_CART,
    payload: number
}

interface AddNewProduct {
    type: typeof ADD_NEW_PRODUCT_TO_CART,
    payload: NewProduct
}

export type ProductAction = FetchProductRequest | FetchProductSuccess | FetchProductFailure
export type CartAction = ProductAddedToCart | ProductDecreaseCount | ProductRemoveFromCart | AddNewProduct
export type AppAction = ProductAction | CartAction