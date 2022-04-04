import { useEffect } from 'react'
import { connect } from 'react-redux';
import { compose, bindActionCreators, Dispatch } from 'redux';

import { Product, ProductListProps } from '../../types/components/productList';
import { AppState } from '../../types/redux/store';
import { AppAction } from '../../types/redux/actionTypes';

import ProductItem from '../ProductItem/ProductItem';
import WithStoreService from '../../hoc/WithStoreService/WithStoreService';
import { fetchProducts, productAddedToCart } from '../../redux/actionCreators';
import { Loader } from '../Loader/Loader';

import classes from './ProductList.module.scss';


const ProductList: React.FC<ProductListProps> = (props: ProductListProps) => {
    const {products, error, loading, onAddedToCart} = props;

    useEffect(() => {
        props.fetchProducts();
    }, [])

    if (loading) {
        return <Loader />
    } else if (error) {
        return <div>Ошибка: {error}</div>;
    } else {
        return (
            <section>
                <h2 className="visually-hidden">Product List</h2>
                <ul className={classes['card__list']}>
                    {products ? products.map((product: Product) => {
                        return <ProductItem key={product.id} dataItem={product} onAddedToCart={() => onAddedToCart(product.id)}/>
                        }) : null }
                </ul>
            </section>
        )
    }
};

const mapStateToProps = ({productList: {products, loading, error}}: AppState) => {
    return { products, loading, error };
};

const mapDispatchToProps = (dispatch: Dispatch<AppAction>, ownProps: ProductListProps) => {
    const {storeService} = ownProps;

    return bindActionCreators({
        fetchProducts: fetchProducts(storeService),
        onAddedToCart: productAddedToCart
    }, dispatch);
};

export default compose(
    WithStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ProductList);
