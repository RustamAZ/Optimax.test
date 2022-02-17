import { useEffect, useState} from 'react'
import CardItem from '../CardItem/CardItem';
import classes from './CardList.module.scss'

const CardList = function(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [shopData, setShopData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/data/cardData.json")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setShopData(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return(
            <ul className={classes['card__list']}>
                {shopData.nvidia ? shopData.nvidia.map((item) => {
                                            return <CardItem
                                                        key={item.pk}
                                                        name={item.name}
                                                        gz={item.gz}
                                                        ram={item.ram}
                                                        type={item.type}
                                                        imgSrc={item.imgSrc}
                                                        price={item.price}
                                                        cardId={item.pk}
                                                    />
                                        })
                : null}
            </ul>
        );
    }
};

export default CardList;