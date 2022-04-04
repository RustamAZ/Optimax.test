import { ValidationErorrProps } from '../../types/components/validationError';
import classes from './ValidationError.module.scss';

const ValidationError: React.FC<ValidationErorrProps> = (props: ValidationErorrProps)  => {
    console.log(props)
    return (
        <span className={classes.error}>{props.text}</span>
    )
}

export default ValidationError;