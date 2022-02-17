import classes from './CardItem.module.scss';
import { Link } from 'react-router-dom';

const CardItem = function(props) {

    return (
        <li className={classes.card}>
            <Link to={'/shop/' + props.cardId}>
                <picture>
                    <img className={classes['card__img']} src={props.imgSrc} alt="" />
                </picture>

                <h2 className={classes['card__title']}>{props.name}</h2>

                <span className={classes['card__price']}>Цена: {props.price}$</span>
            </Link>
        </li>
    )
};

export default CardItem;