import { useState } from 'react';
import { connect } from 'react-redux';

import { CartItem, ShoppingCartProps } from '../../types/components/shoppingCart';
import { AppAction } from '../../types/redux/actionTypes';

import { productRemoveFromCart, productAddedToCart, productDecreaseCount } from '../../redux/actionCreators';
import TotalPrice from '../TotalPrice/TotalPrice';
import Button from '../Button/Button';
import Popup from '../Popup/Popup';
import NewProduct from '../Form';

import classes from './Cart.module.scss';
import { AppState } from '../../types/redux/store';
import { Dispatch } from 'redux';

const Cart: any = (props: ShoppingCartProps) => {
    const {cartItems, total, onIncrease, onDecrease, onDelete} = props;
    const [showPopup, setShowPopup] = useState(false);

    return (
        <section>
            <h2 className="visually-hidden">Cart Table</h2>
            {cartItems.length > 0 ? <div>
                <table className={classes.CartTable}>
                    <thead>
                        <tr>
                            <th scope="col">№</th>

                            <th scope="col">Name</th>

                            <th scope="col">Price</th>

                            <th scope="col">Count</th>

                            <th scope="col"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {cartItems.map((item: CartItem, idx: number) => {
                            const {id, name, price, count} = item;

                            return (
                                <tr className={classes.CartItem} key={id}>
                                    <td scope="row">
                                        <span>{idx + 1}</span>
                                    </td>
                                    <td>
                                        <h3 className={classes.CartItemTitle}>{name}</h3>
                                    </td>
                                    <td>
                                        <span className={classes.CartItemPrice}>{price}$</span>
                                    </td>
                                    <td>
                                        <span className={classes.CartItemCount}>{count}</span>
                                    </td>
                                    <td>
                                        <div className={classes.CartItemBtnWrapper}>
                                            <button onClick={() => {onIncrease(id)}} className={classes.CartItemIncrease}>Increase</button>
                                            <button onClick={() => {onDecrease(id)}} className={classes.CartItemDecrease}>Decrease</button>
                                            <button onClick={() => {onDelete(id)}} className={classes.CartItemDelete}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                {showPopup ?
                    <Popup setActive={setShowPopup}>
                        <NewProduct setActive={setShowPopup}/>
                    </Popup>
                : null}
            </div>
              :
            <div>
                <div className={classes.AddCardWraper}>
                    <span className={classes.total}>Total: <TotalPrice total={total}/></span>
                    <Button type={'button'} text={"Add New Product"} clickHandler={() => setShowPopup(true)}/>
                </div>

                <span>Your cart is empty :(</span>
            </div>}
        </section>
    )
}

const mapStateToProps = ({shoppingCart: {cartItems, total}}: AppState) => {
    return {
        cartItems,
        total
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppAction>) => {
    return {
        onIncrease: (id: number) => dispatch(productAddedToCart(id)),
        onDecrease: (id: number) => dispatch(productDecreaseCount(id)),
        onDelete: (id: number) => dispatch(productRemoveFromCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);