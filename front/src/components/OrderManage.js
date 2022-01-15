import React, { useState, useEffect } from 'react';
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
    if (!orderDatas) {
        console.log(orderDatas);
        return <div>주문이 없습니다.</div>;
    }

    return (
            <div>
                {orderDatas.map((orderData) => {
                    const { orderId, clientId, tableNum, orders } = orderData;

                    return (
                        <div key={orderId}>
                            <div>
                                <h2>주문번호 : {orderId}</h2>
                                <h2>테이블 번호: {tableNum}</h2>
                                <h3>주문 리스트</h3>
                                <ul>
                                    {orders.map((order) => {
                                        const { itemName, quantity } = order;
                                        return (<>
                                            <li>
                                                {itemName} x {quantity}
                                            </li>
                                        </>)
                                    })}
                                </ul>
                            </div>
                            <hr />
                        </div>
                    )
                })}
            </div>
    );
};

export default OrderMange;