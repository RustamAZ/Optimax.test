import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./CardPage.module.scss"
import Button from "../../components/Button/Button";


const CardPage = function() {
    const [isLoadedCard, setIsLoadedCard] = useState(false);
    const [error, setError] = useState(null);
    const [cardItemData, setCardItemData] = useState({});
    const params = useParams();

    const clickHandler = () => {
        console.log('Add');
    };

    useEffect(() => {
        fetch(`http://localhost:3000/data/productData/${params.cardId}.json`)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoadedCard(true);
                setCardItemData(result);
            },
            (error) => {
                setIsLoadedCard(true);
                setError(error);
            }
        )
    }, [])

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoadedCard) {
        return <div>Загрузка...</div>;
    } else {
        return(
            <section className={classes.cardPage}>
                <h1 className={classes.title}>{cardItemData.name}</h1>

                <div className={classes.wrapper}>
                    <div className={classes.imgWrapper}>
                        <picture>
                            <img className={classes.cardImg} src={cardItemData.imgSrc} alt="" />
                        </picture>
                    </div>

                    <div className={classes.cardInfoWrapper}>
                        <ul className={classes.cardListInfo}>
                            <li className={classes.cardItemInfo}>Тип графического процессора: {cardItemData.type}</li>
                            <li className={classes.cardItemInfo}>Частота графического процессора: {cardItemData.gz} Мгц</li>
                            <li className={classes.cardItemInfo}>Объем видеопамяти: {cardItemData.ram} гб</li>
                            <li className={classes.cardItemInfo}>Количество CUDA ядер: {cardItemData.cuda}</li>
                        </ul>

                        <div className={classes.cardPriceBlock}>
                            <span className={classes.cardPrice}> Актуальная цена: <span >{cardItemData.price}$</span></span>
                            <span className={classes.cardOldPrice}>Первичная цена: <span >{cardItemData.startedPrice}$</span></span>
                        </div>

                        <Button clickHandler={clickHandler} type="button" text="Add to Cart"/>
                    </div>
                </div>
            </section>
        );
    }
};

export default CardPage;