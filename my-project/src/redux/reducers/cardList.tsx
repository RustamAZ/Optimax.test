interface IProductList {
    products: object[],
    loading: boolean,
    error: object
}

const initialState: IProductList = {
    products: [],
    loading: true,
    error: {},
}

const updateProductList = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                products: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_PRODUCTS_REQUESTED':
            return {
                products: [],
                loading: true,
                error: null
            };
        case 'FETCH_PRODUCTS_FAILURE':
            return {
                products: [],
                loading: false,
                error: action.payload
            };
        default:
            return state.productList;
    }
}

export default updateProductList;