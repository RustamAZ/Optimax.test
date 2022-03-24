import { useState } from 'react';
import classes from './CardItem.module.scss';
import Popup from '../Popup/Popup';

const CardItem = function({dataItem, onAddedToCart}) {
    const [show, setShow] = useState(false);

    return (
        <>
            <li className={classes.card} onClick={() => {setShow(true)}}>
                <picture>
                    <img className={classes['card__img']} src={dataItem.imgSrc} alt="" />
                </picture>

                <h2 className={classes['card__title']}>{dataItem.name}</h2>

                <span className={classes['card__price']}>Цена: {dataItem.price}$</span>
            </li>
            {show ? <Popup dataPopup={dataItem} setActive={setShow} onAddedToCart={onAddedToCart}/> : null}
        </>
    )
};

export default CardItem;