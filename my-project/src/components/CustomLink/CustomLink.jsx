import { Link } from "react-router-dom";
import classes from './CustomLink.module.scss'

const CustomLink = function(props) {
    return (
        <Link
         className={classes.CustomLink}
         to={props.link}
        >{props.text}</Link>
    )
}

export default CustomLink;