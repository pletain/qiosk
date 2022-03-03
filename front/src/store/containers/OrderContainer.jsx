import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Order from '../../components/Order';
import { cleanCart } from '../modules/cart';

const OrderContainer = () => {
    const items = useSelector(state => state.cart);
    const table = useSelector(state => state.table);
    
    const dispatch = useDispatch();

    const removeAll = useCallback(() => dispatch(cleanCart()), [dispatch]);
    return (
        <>
            <Order items={items} table={table} removeAll={removeAll} />
        </>
    );

};

export default OrderContainer;