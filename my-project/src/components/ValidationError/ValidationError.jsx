import classes from './ValidationError.module.scss';

const ValidationError = ({text}) => {
    return (
        <span className={classes.error}>{text}</span>
    )
}

export default ValidationError;