const updateCartItems = (cartItems, item, idx) => {
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
}

const updateCartItem = (product, item = {}, quantity) => {
    const {
        id = product.id,
        count = 0,
        name = product.name,
        price = 0
    } = item;

    return {
        id,
        name,
        count: count + quantity,
        price: price + (quantity*product.price || quantity*item.price / count)
    }
}

const updateOrderItem = (state, productId, quantity) => {
    const {productList: {products}, shoppingCart: {cartItems, total}} = state;
    const product = products.find(({id}) => id === productId) || cartItems.findIndex(({id}) => id === productId);
    const itemIndex = cartItems.findIndex(({id}) => id === productId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(product, item, quantity);

    return {
        total: total + (product.price*quantity || item.price*quantity / item.count),
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    };
}

const addNewProductinCart = (state, newProduct) => {
    const {shoppingCart: {cartItems, total}} = state

    return {
        total: total + +newProduct.price,
        cartItems: [
            ...cartItems,
            {
                id: newProduct.name,
                name: newProduct.name,
                count: 1,
                price: +newProduct.price
            }
        ]
    }
}

const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            total: 0
        }
    }
    switch (action.type) {
        case 'PRODUCT_ADDED_TO_CART':
            return updateOrderItem(state, action.payload, 1);
        case 'PRODUCT_DECREASE_COUNT' :
            return updateOrderItem(state, action.payload, -1);
        case 'PRODUCT_REMOVE_FROM_CART':
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
            return updateOrderItem(state, action.payload, -item.count);
        case 'ADD_NEW_PRODUCT_TO_CART': 
            return addNewProductinCart(state, action.payload);
        default:
            return state.shoppingCart;
    }
}

export default updateShoppingCart;