import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BTN from '../styles/button.module.css'

const Order = ({ items, removeAll }) => {
    const [loading, setLoading] = useState(false);

    const OrderList = {
        orderId: null,
        clientId: 151,
        tableNum: 17,
        serving: null,
        payment: null,
        orders: [],
    }

    OrderList.orders = items.cart.map(item => {
        return {
            itemName: item.itemname,
            quantity: item.quantity,
        }
    });

    console.log(OrderList);


    const sendOrder = () => {
        const fetchData = async () => {
            setLoading(true);
            try {
                console.log(OrderList);
                await axios.post('/order', OrderList);
                alert("주문이 완료됐습니다!");
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }



    if (loading) {
        return <div>대기 중...</div>
    }

    return (
        <Link to="/">
            <button className={BTN.order} onClick={() => { sendOrder(); removeAll(); }}>주문하기</button>
        </Link>
        
    );
};

export default Order;