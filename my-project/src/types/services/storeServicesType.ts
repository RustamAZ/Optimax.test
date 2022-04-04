export interface StoreService {
    getProducts<Product>(): Promise<Product>
}