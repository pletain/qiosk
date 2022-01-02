import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Menu from '../../components/Menu';
import { addCart } from '../modules/cart';

const CartContainer = () => {
    const dispatch = useDispatch();

    const add = useCallback(item => dispatch(addCart(item)), [dispatch]);
    
    return <Menu add={add} />;
};

export default CartContainer;