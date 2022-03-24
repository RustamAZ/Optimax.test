import { useState } from 'react'
import classes from './Popup.module.scss';
import Button from '../Button/Button';

const Popup = ({setActive, dataPopup, onAddedToCart, id}) => {
    const [popupActive, setPopupActive] = useState(false);

    return (
            <div className={classes.popupContainer}>
                <div onClick={() => {setActive(false)}} className={classes.popupOverlay}>
                </div>

                <div className={popupActive ? classes.popupWrapper + ' ' + classes.active : classes.popupWrapper}>
                    <div className={classes.popupBlock}>
                        <h1 className={classes.title}>{dataPopup.name}</h1>

                        <div className={classes.wrapper}>
                            <div className={classes.imgWrapper}>
                                <picture>
                                    <img className={classes.cardImg} src={dataPopup.imgSrc} alt="" />
                                </picture>
                            </div>

                            <div className={classes.cardInfoWrapper}>
                                <ul className={classes.cardListInfo}>
                                    <li className={classes.cardItemInfo}>Тип графического процессора: {dataPopup.type}</li>
                                    <li className={classes.cardItemInfo}>Частота графического процессора: {dataPopup.gz} Мгц</li>
                                    <li className={classes.cardItemInfo}>Объем видеопамяти: {dataPopup.ram} гб</li>
                                    <li className={classes.cardItemInfo}>Количество CUDA ядер: {dataPopup.cuda}</li>
                                </ul>

                                <div className={classes.cardPriceBlock}>
                                    <span className={classes.cardPrice}> Актуальная цена: <span >{dataPopup.price}$</span></span>
                                    <span className={classes.cardOldPrice}>Первичная цена: <span >{dataPopup.startedPrice}$</span></span>
                                </div>

                                <Button clickHandler={() => {onAddedToCart(id)}} type="button" text="Add to Cart"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Popup;