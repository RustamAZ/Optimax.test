import { NavLink } from "react-router-dom";
import classes from './Header.module.scss'
import Grid from "../../hoc/Grid/Grid";

const Header = function() {
    return (
            <header className={classes.header}>
                <Grid>
                    <ul className={classes['header__list']}>
                        <li className={classes['header__list-item']}>
                            <NavLink exact activeStyle={{color: '#000', backgroundColor: '#76b900'}} to="/">Home</NavLink>
                        </li>

                        <li className={classes['header__list-item']}>
                            <NavLink activeStyle={{color: '#000', backgroundColor: '#76b900'}} to="/shop">Shop</NavLink>
                        </li>

                        <li className={classes['header__list-item']}>
                            <NavLink activeStyle={{color: '#000', backgroundColor: '#76b900'}} to="/cart">Cart</NavLink>
                        </li>
                    </ul>
                </Grid>
            </header>
    )
}

export default Header;