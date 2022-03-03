import React, { useState } from 'react';
import axios from 'axios';
import cookies from 'react-cookies';
import { useNavigate } from 'react-router-dom';
import BTN from '../styles/button.module.css'

const Order = ({ items, table, removeAll }) => {
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();
    const handleGoback = () => {
        navigate(-1);
    };
    const tbnum = cookies.load('tableNum')

    console.log("tttttttttttttttttttt!");
    console.log(tbnum);

    const OrderList = {
        orderId: null,
        clientId: 151,
        tableNum: tbnum,
        serving: null,
        payment: null,
        orders: [],
    }

    OrderList.orders = items.cart.map(item => {
        return {
            itemName: item.itemname,
            quantity: item.quantity,
            price: item.price,
        }
    });

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
            <button className={BTN.order} onClick={() => { sendOrder(); removeAll(); handleGoback(); }}>주문하기</button>
    );
};

export default Order;