import { NavLink } from "react-router-dom";
import classes from './Header.module.scss'
import Grid from "../../hoc/Grid/Grid";

const Header = function() {
    return (
            <header className={classes.header}>
                <Grid>
                    <nav>
                        <ul className={classes['header__list']}>
                            <li className={classes['header__list-item']}>
                                <NavLink className={classes['header__list-link']} to="/">Home</NavLink>
                            </li>

                            <li className={classes['header__list-item']}>
                                <NavLink className={classes['header__list-link']} to="/shop">Shop</NavLink>
                            </li>

                            <li className={classes['header__list-item']}>
                                <NavLink className={classes['header__list-link']} to="/cart">Cart</NavLink>
                            </li>
                        </ul>
                    </nav>
                </Grid>
            </header>
    )
}

export default Header;