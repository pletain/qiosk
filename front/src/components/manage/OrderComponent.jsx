import React, { useState } from 'react';
import axios from 'axios';

import UI from '../../styles/ui.module.css';
import BTN from '../../styles/button.module.css';

const OrderComponent = ({ orderData, deleteOrder }) => {
    let totalPrice = 0
    const { _id, orderTime, tableNum, orders } = orderData;
    const [onToggle, setOnToggle] = useState(false);

    const toggleshow = () => {
        setOnToggle(!onToggle);
    }

    const deleteData = () => {
        const URL = "/ordermanage/delete/" + _id;
        axios.delete(URL,)
            .then(response => {
                deleteOrder(_id);
                if (response.data != null) {
                    alert("주문이 처리됐습니다.");
                }
            })
    };

    return (
        <div onClick={toggleshow} className={UI.order}>
            <div className={UI.info}>
            <div className={UI.tbNum}>{tableNum}번 테이블</div>
                {(onToggle === false) ?
                    <div className={`${BTN.capsule} ${UI.time}`}>{orderTime}</div>
                    : <div className={`${BTN.capsule} ${UI.process}`} onClick={deleteData}>결제처리</div>
                }
            </div>

            <div className={UI.list}>주문 리스트</div>

            <div className={UI.detail}>
                {orders.map((order) => {
                    const { itemName, price, quantity } = order;
                    totalPrice += price * quantity;

                    return (
                        <div key={itemName} className={UI.orderDetail}>
                            <div>{itemName} x {quantity}</div>
                            <div>{price * quantity}원</div>
                        </div>

                    )
                })}
            </div>

            <div className={UI.result}>
                <div>합계</div>
                <div className={UI.total}>{totalPrice}원</div>
            </div>
        </div>
    )
}

export default OrderComponent;