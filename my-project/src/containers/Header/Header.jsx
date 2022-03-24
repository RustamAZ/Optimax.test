import { NavLink } from "react-router-dom";
import classes from './Header.module.scss'
import Grid from "../../hoc/Grid/Grid";

const Header = function() {
    return (
            <header className={classes.header}>
                <Grid>
                    <ul className={classes['header__list']}>
                        <li className={classes['header__list-item']}>
                            <NavLink exact='true' activestyle={{color: "white", cursor: "none"}} to="/">Home</NavLink>
                        </li>

                        <li className={classes['header__list-item']}>
                            <NavLink activestyle={{color: "white", cursor: "none"}} to="/shop">Shop</NavLink>
                        </li>

                        <li className={classes['header__list-item']}>
                            <NavLink activestyle={{color: "white", cursor: "none"}} to="/cart">Cart</NavLink>
                        </li>
                    </ul>
                </Grid>
            </header>
    )
}

export default Header;