const productsRequested = () => {
    return {
        type: 'FETCH_PRODUCTS_REQUESTED',
    }
}

const productsLoaded = (newProducts) => {
    return {
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: newProducts
    };
};

const productsError = (error) => {
    return {
        type: 'FETCH_PRODUCTS_FAILURE',
        payload: error
    }
}

const productAddedToCart = (productId) => {
    return {
        type: 'PRODUCT_ADDED_TO_CART',
        payload: productId
    }
}

const productRemoveFromCart = (productId) => {
    return {
        type: 'PRODUCT_REMOVE_FROM_CART',
        payload: productId
    }
}

const productDecreaseCount = (productId) => {
    return {
        type: 'PRODUCT_DECREASE_COUNT',
        payload: productId
    }
}

const addNewProductToCart = (name, price) => {
    return {
        type: 'ADD_NEW_PRODUCT_TO_CART',
        payload: {name, price}
    }
}

const fetchProducts = (storeService) => () => (dispatch) => {
    dispatch(productsRequested());

    storeService.getProducts().then(res => res.json()).then(
        (result) => {
            dispatch(productsLoaded(result.nvidia));
        },
        (error) => {
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