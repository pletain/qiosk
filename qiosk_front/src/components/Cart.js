import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/client.module.css';


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
                <table>
                    <td className={styles.back} ><Link to="/" ><img alt="back-icon" width="20" height="20" src="https://qioskbucket.s3.ap-northeast-2.amazonaws.com/icon/left-arrow.png" /></Link></td>
                    <td>장바구니</td>
                    <td><button onClick={() => removeAll()}>전체삭제</button></td>
                </table>
            </div>
        )
    }
    console.log('cart.js');
    console.log(items.cart);
    return (
        <div className="cart">
            <h2>
                <table>
                    <td className={styles.back} ><Link to="/" ><img alt="back-icon" width="20" height="20" src="https://qioskbucket.s3.ap-northeast-2.amazonaws.com/icon/left-arrow.png" /></Link></td>
                    <td>장바구니</td>
                    <td><button onClick={() => removeAll()}>전체삭제</button></td>
                </table>
            </h2>

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
            <hr />
            <div><h3>총 주문금액 {totalPrice}원</h3></div>
        </div>
    )
}
export default Cart;