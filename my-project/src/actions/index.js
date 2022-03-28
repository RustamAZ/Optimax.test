const cardsRequested = () => {
    return {
        type: 'FETCH_CARDS_REQUESTED',
    }

}

const cardsLoaded = (newCards) => {
    return {
        type: 'FETCH_CARDS_SUCCESS',
        payload: newCards
    };
};

const cardsError = (error) => {
    return {
        type: 'FETCH_CARDS_FAILURE',
        payload: error
    }
}

const cardAddedToCart = (cardId) => {
    return {
        type: 'CARD_ADDED_TO_CART',
        payload: cardId
    }
}

const cardRemoveFromCart = (cardId) => {
    return {
        type: 'CARD_REMOVE_FROM_CART',
        payload: cardId
    }
}

const cardDecreaseCount = (cardId) => {
    return {
        type: 'CARD_DECREASE_COUNT',
        payload: cardId
    }
}

const addNewProductToCart = (name, price) => {
    return {
        type: 'ADD_NEW_PRODUCT_TO_CART',
        payload: {name, price}
    }
}

const fetchCards = (storeService) => () => (dispatch) => {
    dispatch(cardsRequested());

    storeService.getCards().then(res => res.json()).then(
        (result) => {
            dispatch(cardsLoaded(result.nvidia));
        },
        (error) => {
            dispatch(cardsError(error));
        }
    );
}

export {
    fetchCards,
    cardAddedToCart,
    cardRemoveFromCart,
    cardDecreaseCount,
    addNewProductToCart,
};