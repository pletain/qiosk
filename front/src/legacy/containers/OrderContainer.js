import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Cart from '../components/Cart'
import ItemList from '../components/ItemList';
import { addToCart, deleteFromCart, emptyCart, totalPrice } from '../modules/cart'


const OrderContainer = ({ orderList }) => {
    const dispatch = useDispatch();

    const add = useCallback(item => dispatch(addToCart(item)), [dispatch]);
    const remove = useCallback(item => dispatch(deleteFromCart(item)), [dispatch]);
    const empty = useCallback(() => dispatch(emptyCart()), [dispatch]);
    const total = useCallback(() => dispatch(totalPrice()), [dispatch]);

    return (
        <>
            <div>
                <ItemList add={add}/>
            </div>
            <Cart
                orderList={orderList}
                add={add}
                remove={remove}
                empty={empty}
                total={total}
            />
        </>
    );
};

export default OrderContainer;