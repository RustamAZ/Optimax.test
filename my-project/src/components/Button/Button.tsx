import { Link } from 'react-router-dom';

import { ButtonProps } from '../../types/components/button';

import classes from './Button.module.scss';

const Button: React.FC<ButtonProps> = function({text, link, type, clickHandler, disabled}: ButtonProps) {
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