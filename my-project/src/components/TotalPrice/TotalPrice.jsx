import classes from './TotalPrice.module.scss';

const TotalPrice = ({total}) => {
    return (
        <span className={classes.TotalPrice}>{total}$</span>
    )
}

export default TotalPrice;