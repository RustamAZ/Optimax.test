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

const updateCartItem = (card, item = {}, quantity) => {
    const {
        id = card.pk,
        count = 0,
        name = card.name,
        price = 0
    } = item;

    return {
        id,
        name,
        count: count + quantity,
        price: price + quantity*card.price
    }
}

const updateOrderItem = (state, cardId, quantity) => {
    const {cardList: {cards}, shoppingCart: {cartItems}} = state;
    const card = cards.find(({pk}) => pk === cardId);
    const itemIndex = cartItems.findIndex(({id}) => id === cardId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(card, item, quantity);

    return {
        total: 0,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    };
}

const updateShoppingCart = (state, action) => {
    console.log(state, action)
    if (state === undefined) {
        return {
            cartItems: [],
            total: 0
        }
    }
    switch (action.type) {
        case 'CARD_ADDED_TO_CART':
            return updateOrderItem(state, action.payload, 1);
        case 'CARD_DECREASE_COUNT' :
            return updateOrderItem(state, action.payload, -1);
        case 'CARD_REMOVE_FROM_CART':
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
            return updateOrderItem(state, action.payload, -item.count);
        default:
            return state.shoppingCard;
    }
}

export default updateShoppingCart;