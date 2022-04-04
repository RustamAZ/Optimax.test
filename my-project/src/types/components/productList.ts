import { Dispatch } from 'redux';
import { StoreService } from './../services/storeServicesType';

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
    products: Product[],
    loading: boolean,
    error: null | string
}

export interface ProductListProps {
    products: Product[],
    loading: boolean,
    error: string,
    onAddedToCart: (id: number) => Dispatch,
    storeService: StoreService,
    fetchProducts: () => Promise<ProductList>
    children?: React.ReactChild | React.ReactNode
}
