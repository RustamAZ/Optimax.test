import { Product } from "../components/productList";

export interface StoreService {
    getProducts<T>(): Promise<T> 
}