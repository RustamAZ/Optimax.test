import { useEffect } from 'react'
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

import CardItem from '../ProductItem/ProductItem';
import WithStoreService from '../../hoc/WithStoreService/WithStoreService';
import { fetchProducts, productAddedToCart } from '../../redux/actions';
import { Loader } from '../Loader/Loader';

import classes from './ProductList.module.scss';

const ProductListContainer = function(props) {
    const {products, error, loading, onAddedToCart} = props;

    useEffect(() => {
        props.fetchProducts();
    }, [])

    if (loading) {
        return <Loader />
    } else if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else {
        return <ProductList products={products} onAddedToCart={onAddedToCart}/>
    }
};

const ProductList = ({products, onAddedToCart}) => {
    return (
        <>
            <ul className={classes['card__list']}>
                {products ? products.map((product) => {
                    return <CardItem key={product.id} dataItem={product} onAddedToCart={() => onAddedToCart(product.id)}/>
                    }) : null }
            </ul>
        </>
    )
}

const mapStateToProps = ({productList: {products, loading, error}}) => {
    return { products, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {storeService} = ownProps;

    return bindActionCreators({
        fetchProducts: fetchProducts(storeService),
        onAddedToCart: productAddedToCart
    }, dispatch);
};

export default compose(
    WithStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ProductListContainer);
