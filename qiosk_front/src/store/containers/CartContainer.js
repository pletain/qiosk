import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../../components/Cart';
import { deleteCart, increment, decrement, cleanCart, total } from '../modules/cart';

const CartContainer = () => {
    const items = useSelector(state => state.cart);
    
    const dispatch = useDispatch();

    const remove = useCallback(item => dispatch(deleteCart(item)), [dispatch]);
    const removeAll = useCallback(() => dispatch(cleanCart()), [dispatch]);
    const onIncrease = useCallback(item => dispatch(increment(item)), [dispatch]);
    const onDecrease = useCallback(item => dispatch(decrement(item)), [dispatch]);
    const totalPrice = useCallback(() => dispatch(total()), [dispatch])
    
    return <Cart 
    items={items}
    remove={remove} 
    removeAll={removeAll} 
    onIncrease={onIncrease} 
    onDecrease={onDecrease}
    />;
};

export default CartContainer;