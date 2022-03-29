import { ProductState } from './productList';
import { ShoppingCart } from './shoppingCart';

export interface State {
    productList: ProductState;
    shoppingCart: ShoppingCart;
}