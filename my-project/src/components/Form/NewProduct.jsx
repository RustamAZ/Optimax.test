import { useEffect, useRef, useState } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import useInput from "../../hooks/useInput";

import { addNewProductToCart } from "../../redux/actions";
import Button from "../Button/Button";
import ValidationError from "../ValidationError/ValidationError";

import classes from './NewProduct.module.scss';

const NewProduct = (props) => {
    const {addNewProduct, setActive} = props;
    const nameRef = useRef('');
    const priceRef = useRef('');

    const addProductHandler = () => {
        addNewProduct(nameRef.current.value, priceRef.current.value);
        setActive(false);
    };

    const name = useInput('', {isEmpty: true});
    const price = useInput('', {isEmpty: true, onlyNumb: true});

    return (
        <div className={classes.formWrapper}>
            <form className={classes.form}>

                <div className={classes.control}>
                    <input onChange={e => name.onChange(e)} onBlur={e => name.onBlur(e)} value={name.value} ref={nameRef} placeholder="name" name="name"></input>
                    <label htmlFor="name">Name</label>
                    {(name.isOutFocus && name.isEmpty) && <ValidationError text="'Name' field should not be empty"/>}
                </div>

                <div className={classes.control}>
                    <input onChange={e => price.onChange(e)} onBlur={e => price.onBlur(e)} value={price.value} ref={priceRef} placeholder="price" name="price"></input>
                    <label htmlFor="price">Price</label>
                    {((price.isOutFocus && price.isEmpty) || (price.isOutFocus && price.numbError)) ? <ValidationError text="Enter the correct amount"/> : null}
                </div>

                <Button disabled={!name.inputValid || !price.inputValid} clickHandler={() => addProductHandler()} type={'button'} text={"Add New Product"}></Button>
            </form>
        </div>
    )
}

const mapStateToProps = ({productList: {products, loading, error}}) => {
    return { products, loading, error };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addNewProduct: addNewProductToCart
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);