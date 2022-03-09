import { useState, useEffect } from 'react'
import classes from './Popup.module.scss';
import { Loader } from '../Loader/Loader';
import Button from '../Button/Button';

const Popup = ({setActive, cardId}) => {
    const [isLoadedPopup, setIsLoadedPopup] = useState(false);
    const [error, setError] = useState(null);
    const [popupData, setPopupData] = useState({});
    const [popupActive, setPopupActive] = useState(false);

    const clickHandler = () => {
        console.log(cardId);
    }

    useEffect(() => {
        fetch(`http://localhost:3000/data/productData/${cardId}.json`)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoadedPopup(true);
                setPopupData(result);
                setTimeout(() => {
                    setPopupActive(true);
                }, 100)
            },
            (error) => {
                setIsLoadedPopup(true);
                setError(error);
            }
        );
    }, []);

    if (error) {
        return (
            <div className={classes.popupContainer}>
                <div onClick={() => {setActive(false)}} className={classes.popupOverlay}>
                </div>
                <div className={classes.popupBlock}> 
                    Error...
                </div>
            </div>
        )
    } else if (!isLoadedPopup) {
        return (
            <div className={classes.popupContainer}>
                <div onClick={() => {setActive(false)}} className={classes.popupOverlay}>
                </div>
                <Loader />
            </div>
        )
    } else {
        return (
            <div className={classes.popupContainer}>
                <div onClick={() => {setActive(false)}} className={classes.popupOverlay}>
                </div>

                <div className={popupActive ? classes.popupWrapper + ' ' + classes.active : classes.popupWrapper}>
                    <div className={classes.popupBlock}>
                        <h1 className={classes.title}>{popupData.name}</h1>

                        <div className={classes.wrapper}>
                            <div className={classes.imgWrapper}>
                                <picture>
                                    <img className={classes.cardImg} src={popupData.imgSrc} alt="" />
                                </picture>
                            </div>

                            <div className={classes.cardInfoWrapper}>
                                <ul className={classes.cardListInfo}>
                                    <li className={classes.cardItemInfo}>Тип графического процессора: {popupData.type}</li>
                                    <li className={classes.cardItemInfo}>Частота графического процессора: {popupData.gz} Мгц</li>
                                    <li className={classes.cardItemInfo}>Объем видеопамяти: {popupData.ram} гб</li>
                                    <li className={classes.cardItemInfo}>Количество CUDA ядер: {popupData.cuda}</li>
                                </ul>

                                <div className={classes.cardPriceBlock}>
                                    <span className={classes.cardPrice}> Актуальная цена: <span >{popupData.price}$</span></span>
                                    <span className={classes.cardOldPrice}>Первичная цена: <span >{popupData.startedPrice}$</span></span>
                                </div>

                                <Button clickHandler={clickHandler} type="button" text="Add to Cart"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
 
}

export default Popup;