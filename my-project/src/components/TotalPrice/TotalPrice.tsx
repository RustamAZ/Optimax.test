import { TotalPriceProps } from '../../types/components/shoppingCart';
import classes from './TotalPrice.module.scss';

const TotalPrice: React.FC<TotalPriceProps> = ({total}: TotalPriceProps) => {
    return (
        <span className={classes.TotalPrice}>{total}$</span>
    )
}

export default TotalPrice;