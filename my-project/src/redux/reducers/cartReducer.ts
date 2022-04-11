import { Product } from "../../types/components/productList";
import { CartItem, NewProduct, ShoppingCart } from "../../types/components/shoppingCart";
import { CartAction } from "../../types/redux/actionTypes";

import { PRODUCT_ADDED_TO_CART, PRODUCT_DECREASE_COUNT, PRODUCT_REMOVE_FROM_CART, ADD_NEW_PRODUCT_TO_CART } from "../../redux/actions";
import store from "../store";

const updateCartItems = (cartItems: CartItem[], item: CartItem, idx: number) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};

const updateCartItem = (product: Product | any, item: CartItem, quantity: number) => {
    if (product) {
        if (item === undefined) {
            item = {
                id: product.id,
                count: 0,
                name: product.name,
                price: 0
            }
        }

        const {id, count = 0, name, price = 0} = item;

        return {
            id,
            name,
            count: count + quantity,
            price: price + product.price*quantity
        };
    } else {
        const {id, count, name, price} = item;

        return {
            id,
            name,
            count: count + quantity,
            price: price + item.price*quantity / count
        };
    }
};

const updateOrderItem = (state: ShoppingCart, productId: number, quantity: number) => {
    const globalState: any = store.getState();
    const products: any = globalState.productList.products;
    const {cartItems, total} = state;

    const itemIndex = cartItems.findIndex(({id}) => id === productId);
    const item = cartItems[itemIndex];
    const product: any = products.find((product: any) => product.id === productId);

    const newItem = updateCartItem(product, item, quantity);

    if (product) {
        return {
            total: total + product.price*quantity,
            cartItems: updateCartItems(cartItems, newItem, itemIndex)
        };
    } else {
        return {
            total: total + item.price*quantity / item.count,
            cartItems: updateCartItems(cartItems, newItem, itemIndex)
        };
    }
};

const addNewProductToCart = (state: ShoppingCart, newProduct: NewProduct) => {
    const {cartItems, total} = state;

    return {
        total: total + +newProduct.price,
        cartItems: [
            {
                id: Math.floor(Math.random() * 10000),
                name: newProduct.name,
                count: 1,
                price: +newProduct.price
            },
            ...cartItems
        ]
    }
};

const initialCartState = {
    total: 0,
    cartItems: []
}

const cartReducer = (state: ShoppingCart = initialCartState, action: CartAction): ShoppingCart => {
    switch (action.type) {
        case PRODUCT_ADDED_TO_CART:
            return updateOrderItem(state, action.payload, 1);
        case PRODUCT_DECREASE_COUNT :
            return updateOrderItem(state, action.payload, -1);
        case PRODUCT_REMOVE_FROM_CART:
            const item = state.cartItems.find(({id}) => id === action.payload);
            if (item) {
                return updateOrderItem(state, action.payload, -item.count)
            } else {
                return state;
            }
        case ADD_NEW_PRODUCT_TO_CART: 
            return addNewProductToCart(state, action.payload);
        default:
            return state;
    }
};

export default cartReducer;