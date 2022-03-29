import { useEffect } from 'react'
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

import CardItem from '../ProductItem/ProductItem';
import WithStoreService from '../../hoc/WithStoreService/WithStoreService';
import { fetchProducts, productAddedToCart } from '../../redux/actionCreators';
import { Loader } from '../Loader/Loader';

import classes from './ProductList.module.scss';

const ProductListContainer: React.FC = function(props: any) {
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

const ProductList = ({products, onAddedToCart}: any) => {
    return (
        <>
            <ul className={classes['card__list']}>
                {products ? products.map((product: any) => {
                    return <CardItem key={product.id} dataItem={product} onAddedToCart={() => onAddedToCart(product.id)}/>
                    }) : null }
            </ul>
        </>
    )
}

const mapStateToProps = ({productList: {products, loading, error}}: any) => {
    return { products, loading, error };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
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
