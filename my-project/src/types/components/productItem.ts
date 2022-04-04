import { AppAction } from './../redux/actionTypes';
import { Dispatch } from "redux";
import { Product } from "./productList";

export interface ProductItemProps {
    dataItem: Product,
    onAddedToCart: (id: number) => Dispatch<AppAction>
}