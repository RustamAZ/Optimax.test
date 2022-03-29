export interface CartItems {
    id: string,
    name: string,
    count: number,
    price: number,
}

export interface ShoppingCart {
    total: number,
    cartItems: CartItems[]
}