import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../../components/Cart';
import Order from '../../components/Order';
import { deleteCart, increment, decrement, cleanCart } from '../modules/cart';

const CartContainer = () => {
    const items = useSelector(state => state.cart);
    const table = items.table;

    const dispatch = useDispatch();

    const remove = useCallback(item => dispatch(deleteCart(item)), [dispatch]);
    const removeAll = useCallback(() => dispatch(cleanCart()), [dispatch]);
    const onIncrease = useCallback(item => dispatch(increment(item)), [dispatch]);
    const onDecrease = useCallback(item => dispatch(decrement(item)), [dispatch]);

    return (
        <>
            <div>
                <Cart
                    items={items}
                    remove={remove}
                    removeAll={removeAll}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}
                />
            </div>
            {items.cart.length === 0 ? null
                :<div>
                    <Order items={items} table={table} removeAll={removeAll} />
                </div>}
        </>
    );

};

export default CartContainer;