export interface Product {
    id: number,
    name: string,
    cuda: number,
    ram: number,
    gz: number,
    type: number,
    price: number,
    imgSrc: string,
    count: number
}

export interface ProductList {
    products: Product[];
    loading: boolean;
    error: null | string;
}
