import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Order from '../../components/Order';
import { cleanCart } from '../modules/cart';

const OrderContainer = () => {
    const items = useSelector(state => state.cart);

    console.log('OrderContainer = ' + items)
    
    const dispatch = useDispatch();

    const removeAll = useCallback(() => dispatch(cleanCart()), [dispatch]);

    return (
        <>
            <Order items={items} removeAll={removeAll} />
        </>
    );

};

export default OrderContainer;