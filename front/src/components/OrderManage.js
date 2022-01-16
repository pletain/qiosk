import React, { useState, useEffect } from 'react';
import UI from '../styles/manage.module.css';
import BTN from '../styles/button.module.css';
import axios from 'axios';

const OrderMange = () => {

    const [orderDatas, setOrderDatas] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('/ordermanage',);
                setOrderDatas(response.data);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>대기 중...</div>
    }
    if (orderDatas === null) {
        console.log("주문상태" + orderDatas);
        return (
            <div>
                <h1>주문없음</h1>
                주문이 없습니다.
            </div>
        );
    }

    return (
        <div className={UI.orderMange}>
            <div className={UI.navbar}>
                <div className={UI.title}>주문내역</div>
            </div>

            <div className={UI.orderBody}>
                {orderDatas.map((orderData) => {
                    let totalPrice = 0
                    const { orderId, time, tableNum, orders } = orderData;

                    return (
                        <div className={UI.order} key={orderId}>
                            <div className={UI.info}>
                                <div className={UI.group}>
                                    <div id={UI.odNum}>{orderId}</div>
                                    <div id={UI.tbNum}>{tableNum}번 테이블</div>
                                </div>
                                <div className={BTN.capsule} id={UI.time}>{time}</div>
                            </div>
                            <div id={UI.list}>주문 리스트</div>
                            <div id={UI.detail}>
                                {orders.map((order) => {
                                    const { itemName, price, quantity } = order;
                                    totalPrice += price * quantity;

                                    return (
                                        <div className={UI.detail}>
                                            <div>
                                                {itemName} x {quantity}
                                            </div>
                                            <div>
                                                {price * quantity}원
                                            </div>
                                        </div>

                                    )
                                })}
                            </div>
                            <div className={UI.total}>
                                <div>합계</div>
                                <div id={UI.total}>{totalPrice}원</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default OrderMange;