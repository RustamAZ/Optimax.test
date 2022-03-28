import { Link } from 'react-router-dom';
import classes from './Button.module.scss';

const Button = function({text, link, type, clickHandler, disabled}) {
    if (link) {
        return (
        <Link to={link} className={classes.button}>
            {text}
        </Link>
        )
    } else {
        return (
            <button
                className={classes.button}
                type={type}
                onClick={clickHandler}
                disabled={disabled}
            >{text}</button>
        )
    }

};

export default Button;