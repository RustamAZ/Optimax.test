import classes from './Button.module.scss';

const Button = function(props) {
    return (
        <button
            className={classes.button}
            type={props.type}
            onClick={props.clickHandler}
        >{props.text}</button>
    )
};

export default Button;