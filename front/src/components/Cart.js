import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import UI from '../styles/ui.module.css';
import BTN from '../styles/button.module.css';


const CartItem = ({ item, remove, onIncrease, onDecrease }) => {
    const { id, itemname, price, quantity } = item;

    return (
        item && <div className={UI.item} key={id}>
            <div className={UI.info}>
                <h3>{itemname} x {quantity}</h3>
                <span className={UI.delete} onClick={() => remove(item)}>삭제</span>
            </div>

            <div className={UI.price}>
                <h3>{price * quantity}원</h3>
                <div className={BTN.counter}>
                    {(quantity > 1) ? 
                    <img className={BTN.plus} onClick={() => onDecrease(item)} alt="minus" src="/icon/minus.png" /> 
                    : <img className={BTN.plus} alt="minus" src="/icon/minus-sign.png" />}
                    <span>{quantity}개</span>
                    <img className={BTN.plus} onClick={() => onIncrease(item)} alt="plus" src="/icon/plus.png" />
                </div>
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
                            <img alt="뒤로가기" width="25" align="center" src="/icon/left-arrow.png" />
                        </Link>
                    </td>
                    <td>
                        장바구니
                    </td>
                    <td className={UI.clear}>
                        <img onClick={() => removeAll()} width="25" height="25" alt="전체삭제" src="/icon/bin.png" />
                        <div className={UI.space} />
                    </td>
                </table>
                <div className={UI.emptyCart}>
                    <img alt="empty-cart" width="100" src="/icon/empty-cart.png" />
                    <h3>장바구니가 비었습니다.</h3>
                </div>
            </div>
        )
    }
    console.log('cart.js');
    console.log(items.cart);
    return (
        <div>
            <table className={UI.navbar}>
                <td className={UI.back}>
                    <div className={UI.space} />
                    <Link to="/">
                        <img alt="뒤로가기" width="25" align="center" src="/icon/left-arrow.png" />
                    </Link>
                </td>
                <td>
                    장바구니
                </td>
                <td className={UI.clear}>
                    <img onClick={() => removeAll()} width="25" height="25" alt="전체삭제" src="/icon/bin.png" />
                    <div className={UI.space} />
                </td>
            </table>
            <div className={UI.orderList}>
                {items.cart.map((item) => (
                    <CartItem
                        item={item}
                        remove={remove}
                        onIncrease={onIncrease}
                        onDecrease={onDecrease}
                    />
                ))}
                <div className={UI.totalprice}>총 주문금액 {totalPrice}원</div>
            </div>
        </div>
    )
}
export default Cart;