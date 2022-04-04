import { useRef} from "react";
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from "redux";
import useInput from "../../hooks/useInput";

import { NewProductProps } from "../../types/components/newProductForm";
import { AppState } from "../../types/redux/store";
import { AppAction } from '../../types/redux/actionTypes'

import { addNewProductToCart } from "../../redux/actionCreators";
import Button from "../Button/Button";
import ValidationError from "../ValidationError/ValidationError";

import classes from './NewProduct.module.scss';

const NewProduct: React.FC<NewProductProps> = (props: NewProductProps) => {
    const {addNewProduct, setActive} = props;
    const nameRef: any = useRef('');
    const priceRef: any = useRef('');

    const addProductHandler = () => {
        addNewProduct({name: nameRef.current.value, price: priceRef.current.value});
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

const mapStateToProps = ({productList: {products, loading, error}}: AppState): any => {
    return { products, loading, error };
};

const mapDispatchToProps = (dispatch: Dispatch<AppAction>) => {
    return bindActionCreators({
        addNewProduct: addNewProductToCart
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);