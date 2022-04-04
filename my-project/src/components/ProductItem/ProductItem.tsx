import { useState } from 'react';

import { ProductItemProps } from '../../types/components/productItem';

import Popup from '../Popup/Popup';
import Button from '../Button/Button';

import classes from './ProductItem.module.scss';

const ProductItem: React.FC<ProductItemProps> = function({dataItem, onAddedToCart}: ProductItemProps) {
    const [show, setShow] = useState(false);

    return (
        <>
            <li className={classes.item} onClick={() => {setShow(true)}}>
                <img className={classes.img} src={dataItem.imgSrc} alt="" />

                <h2 className={classes.title}>{dataItem.name}</h2>

                <span className={classes.price}>Цена: {dataItem.price}$</span>
            </li>

            {show ? <Popup setActive={setShow} onClickButton={onAddedToCart}>
                        <div className={classes.popup}>
                            <div className={classes.popupContent}>
                                <h1 className={classes.popupTitle}>{dataItem.name}</h1>

                                <div className={classes.popupInfoBlock}>
                                    <div className={classes.popupImgBlock}>
                                        <img className={classes.popupImg} src={dataItem.imgSrc} alt="" />
                                    </div>

                                    <ul className={classes.popupInfoList}>
                                        <li className={classes.popupInfoItem}>Тип графического процессора: {dataItem.type}</li>
                                        <li className={classes.popupInfoItem}>Частота графического процессора: {dataItem.gz} Мгц</li>
                                        <li className={classes.popupInfoItem}>Объем видеопамяти: {dataItem.ram} гб</li>
                                        <li className={classes.popupInfoItem}>Количество CUDA ядер: {dataItem.cuda}</li>
                                    </ul>
                                </div>

                                <div className={classes.popupLower}>
                                    <div className={classes.popupPrice}><span>{dataItem.price}$</span></div>

                                    <Button clickHandler={() => {onAddedToCart(dataItem.id)}} type="button" text="Add to Cart"/>
                                </div>
                            </div>
                        </div>
                    </Popup> : null}
        </>
    )
};

export default ProductItem;