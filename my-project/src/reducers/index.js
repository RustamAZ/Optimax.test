import updateShoppingCart from "./shoppingCart";
import updateCardList from "./cardList";

const reducer = (state, action) => {
    return {
        cardList: updateCardList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
}

export default reducer;