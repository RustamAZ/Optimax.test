import { ProductAction, ProductState, ProductActionTypes} from "../../types/productList";
import { State } from "../../types/state";


const updateProductList = (state: State, action: ProductAction): ProductState => {
    if (state === undefined) {
        return {
            products: [],
            loading: true,
            error: null,
        }
    }
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                products: action.payload,
                loading: false,
                error: null
            };
        case ProductActionTypes.FETCH_PRODUCTS_REQUESTED:
            return {
                products: [],
                loading: true,
                error: null
            };
        case ProductActionTypes.FETCH_PRODUCTS_FAILURE:
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