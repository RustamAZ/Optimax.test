import { useState } from 'react';
import classes from './CardItem.module.scss';
import Popup from '../Popup/Popup';

const CardItem = function(props) {
    const [show, setShow] = useState(false);

    return (
        <>
            <li className={classes.card} onClick={() => {setShow(true)}}>
                <picture>
                    <img className={classes['card__img']} src={props.imgSrc} alt="" />
                </picture>

                <h2 className={classes['card__title']}>{props.name}</h2>

                <span className={classes['card__price']}>Цена: {props.price}$</span>
            </li>
            {show ? <Popup setActive={setShow} cardId={props.cardId} /> : null}
        </>

    )
};

export default CardItem;