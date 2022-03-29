export interface ProductState {
    products: object[];
    loading: boolean;
    error: null | string;
}

export enum ProductActionTypes {
    FETCH_PRODUCTS_REQUESTED = 'FETCH_PRODUCTS_REQUESTED',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'
}

interface FetchProductRequest {
    type: ProductActionTypes.FETCH_PRODUCTS_REQUESTED,
}

interface FetchProductSuccess {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: any[]
}

interface FetchProductFailure {
    type: ProductActionTypes.FETCH_PRODUCTS_FAILURE,
    payload: string
}

export type ProductAction = FetchProductRequest | FetchProductSuccess | FetchProductFailure