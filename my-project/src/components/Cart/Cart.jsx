import { useState } from 'react';
import { connect } from 'react-redux';

import { cardRemoveFromCart, cardAddedToCart, cardDecreaseCount } from '../../actions';
import TotalPrice from '../TotalPrice/TotalPrice';
import Button from '../Button/Button';
import Popup from '../Popup/Popup';
import NewProduct from '../Form';

import classes from './Cart.module.scss';

const Cart = ({cartItems, total, onIncrease, onDecrease, onDelete}) => {
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
                        {cartItems.map((item, idx) => {
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

                <div className={classes.AddCardWraper}>
                    <span className={classes.total}>Total: <TotalPrice total={total}/></span>
                    <Button type={'button'} text={"Add New Product"} clickHandler={() => setShowPopup(true)}/>
                </div>

                {showPopup ? <Popup setActive={setShowPopup}>
                    <NewProduct setActive={setShowPopup}/>
                </Popup> : null}

            </div> : <span>Your cart is empty :(</span>}
        </section>
    )
}

const mapStateToProps = ({shoppingCart: {cartItems, total}}) => {
    return {
        cartItems,
        total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => dispatch(cardAddedToCart(id)),
        onDecrease: (id) => dispatch(cardDecreaseCount(id)),
        onDelete: (id) => dispatch(cardRemoveFromCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);