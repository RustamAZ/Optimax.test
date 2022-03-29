export interface CartItem {
    id: number,
    name: string,
    count: number,
    price: number,
}

export interface NewProduct {
    name: string,
    price: number
}

export interface ShoppingCart {
    total: number,
    cartItems: CartItem[]
}
