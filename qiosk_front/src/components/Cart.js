import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../styles/icon.module.css';
import UI from '../styles/ui.module.css';
import BTN from '../styles/button.module.css';


const CartItem = ({ item, remove, onIncrease, onDecrease }) => {
    const { id, itemname, price, quantity } = item;

    return (
        item && <div key={id}>
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
            <div>
                <table className={UI.navbar}>
                    <td className={UI.back}>
                        <div className={UI.space} />
                        <Link to="/">
                            <img className={Icon.back} alt="뒤로가기" src="/icon/left-arrow.png" />
                        </Link>
                    </td>
                    <td>
                        장바구니가 비었습니다
                    </td>
                    <td className={UI.clear}>
                        <button className={BTN.clear} onClick={() => removeAll()}>
                            전체삭제
                        </button>
                        <div className={UI.space} />
                    </td>
                </table>
            </div>
        )
    }
    console.log('cart.js');
    console.log(items.cart);
    return (
        <div className={UI.orderList}>
            <div>
                <table className={UI.navbar}>
                    <td className={UI.back}>
                        <div className={UI.space} />
                        <Link to="/">
                            <img className={Icon.back} alt="뒤로가기" src="/icon/left-arrow.png" />
                        </Link>
                    </td>
                    <td>
                        장바구니
                    </td>
                    <td className={UI.clear}>
                        <button className={BTN.clear} onClick={() => removeAll()}>
                            전체삭제
                        </button>
                        <div className={UI.space} />
                    </td>
                </table>
            </div>

            <div>
                {items.cart.map((item) => (
                    <CartItem
                        item={item}
                        remove={remove}
                        onIncrease={onIncrease}
                        onDecrease={onDecrease}
                    />
                ))}
            </div>
            <hr />
            <div><h3>총 주문금액 {totalPrice}원</h3></div>
        </div>
    )
}
export default Cart;