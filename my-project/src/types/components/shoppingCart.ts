import { Dispatch } from "redux"

export interface CartItem {
    id: number,
    name: string,
    count: number,
    price: number
}

export interface NewProduct {
    name: string,
    price: number
}

export interface TotalPriceProps {
    total: number
}

export interface ShoppingCart {
    total: number,
    cartItems: CartItem[]
}

// export type ShoppingCart = Promise<{ total: number; cartItems: CartItem[]; }>

export interface ShoppingCartProps {
    cartItems: CartItem[],
    onDelete: (id :number) => Dispatch,
    onDecrease: (id :number) => Dispatch,
    onIncrease: (id :number) => Dispatch,
    total: number
}