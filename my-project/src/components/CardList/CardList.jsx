import { useEffect } from 'react'
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

import CardItem from '../CardItem/CardItem';
import WithStoreService from '../../hoc/WithStoreService/WithStoreService';
import { fetchCards, cardAddedToCart } from '../../actions';
import { Loader } from '../Loader/Loader';

import classes from './CardList.module.scss';

const CardListContainer = function(props) {
    console.log(props)
    const {cards, error, loading, onAddedToCart} = props;

    useEffect(() => {
        props.fetchCards();
    }, [])

    if (loading) {
        return <Loader />
    } else if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else {
        return <CardList cards={cards} onAddedToCart={onAddedToCart}/>
    }
};

const CardList = ({cards, onAddedToCart}) => {
    return (
        <>
            <ul className={classes['card__list']}>
                {cards ? cards.map((item) => {
                    return <CardItem key={item.id} dataItem={item} onAddedToCart={() => onAddedToCart(item.id)}/>
                    }) : null }
            </ul>
        </>

    )
}

const mapStateToProps = ({cardList: {cards, loading, error}}) => {
    return { cards, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {storeService} = ownProps;

    return bindActionCreators({
        fetchCards: fetchCards(storeService),
        onAddedToCart: cardAddedToCart
    }, dispatch);
};

export default compose(
    WithStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(CardListContainer);
