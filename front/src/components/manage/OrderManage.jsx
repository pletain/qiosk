import React, { useState, useEffect } from 'react';
import UI from '../../styles/manage.module.css';
import BTN from '../../styles/button.module.css';
import axios from 'axios';

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
            if(response.data != null) {
                alert("주문이 처리됐습니다.");
            }
        })
    };

    console.log(orderData);
    console.log(orderTime);
    
    return (
        <div onClick={toggleshow} className={UI.order}>
            <div className={UI.info}>
                <div className={UI.group}>
                    <div id={UI.tbNum}>{tableNum}번 테이블</div>
                </div>
                {(onToggle===false) ?
                    <div className={BTN.capsule} id={UI.time}>{orderTime}</div> 
                    : <div onClick={deleteData} className={BTN.capsule} id={UI.process}>결제처리</div>
                }
                {/* <div className={BTN.capsule} id={UI.time}>{time}</div> */}
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
}


const OrderMange = () => {

    const [orderDatas, setOrderDatas] = useState(null);
    const [loading, setLoading] = useState(false);

    const deleteOrder = (_id) => {
        setOrderDatas(
            orderDatas.filter( (orderData) => 
            orderData._id !== _id)
        );
    }

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

    console.log(orderDatas);

    return (
        <div className={UI.orderMange}>
            <div className={UI.navbar}>
                <div className={UI.title}>📋 주문내역</div>
            </div>

            <div className={UI.orderBody}>
                {
                orderDatas.map((orderData) => (
                    <OrderComponent
                    orderData={orderData}
                    deleteOrder={deleteOrder}
                    />
                ))}
            </div>
        </div>
    );
};

export default OrderMange;