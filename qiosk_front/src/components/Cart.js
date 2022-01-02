import React, { useMemo } from 'react';

const CartItem = ({ item, remove, onIncrease, onDecrease }) => {
    const { id, itemname, price, quantity } = item;
    console.log(item);

    return (
        item && <div className="eachItem" key={id}>
            <div>
                <h3>{itemname} x {quantity}</h3>
                <div>
                    <button onClick={() => onDecrease(item)}> - </button>
                    <span>{quantity}개</span>
                    <button onClick={() => onIncrease(item)}> + </button>
                </div>
                <div>
                    {price * quantity}원
                </div>
                <button onClick={() => remove(item)}>X</button>
            </div>
        </div>
    )
}


const Cart = ({ items, remove, removeAll, onIncrease, onDecrease }) => {
    let totalPrice = useMemo(() => {
        return items.cart.map((item) => {
            const { price, quantity } = item;
            return price * quantity;
        }).reduce((sum, cur) => sum + cur, 0);
    }, [items]);


    if (items.cart.length === 0) {
        return (
            <div>장바구니가 비었습니다.</div>
        )
    }
    console.log(items.cart);
    return (
        <div className="cart">
            <h2>장바구니</h2>
            <button onClick={() => removeAll()}>전체삭제</button>

            <div className="item_list">
                {items.cart.map((item) => (
                    <CartItem 
                    item={item} 
                    remove={remove} 
                    onIncrease={onIncrease} 
                    onDecrease={onDecrease} 
                    />
                ))}
            </div>
            <div>{totalPrice}원</div>
        </div>
    )
}
export default Cart;