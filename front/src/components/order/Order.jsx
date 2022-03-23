import React, { useState } from 'react';
import axios from 'axios';
import cookies from 'react-cookies';
import { useNavigate } from 'react-router-dom';
import BTN from '../../styles/button.module.css'

const Order = ({ items, removeAll }) => {
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    const handleGoback = () => {
        navigate('/menu', { replace: true });
    };
    const handleGoSignin = () => {
        navigate('/signin', { replace: true });
    }


    const tbnum = cookies.load('tableNum');
    const authorization = cookies.load('accessToken');

    let time = new Date().toTimeString().split(" ")[0];
    let curTime = time.substring(0, time.length - 3);
    console.log(curTime);

    const OrderList = {
        _id: null,
        tableNum: tbnum,
        authorization: 'Bearer ' + authorization,
        orderTime: curTime,
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
                await axios.post('/order', OrderList)
                    .then((res) => {
                        console.log(res);
                        if(res.status === 200) {
                            alert("주문이 완료됐습니다!");
                            handleGoback();
                        }
                    })
            } catch (e) {
                console.log(e);
                if (e.response.status === 401) {
                    alert("인증이 만료됐습니다. 다시 로그인 해주세요.");
                    handleGoSignin();
                }
            }
            setLoading(false);
        };
        fetchData();
    }

    if (loading) {
        return <div><img alt="불러오는중..." width="25" align="center" src="/icon/loading.gif" /></div>
    }

    return (
            <button className={BTN.order} onClick={() => { removeAll(); sendOrder();}}>주문하기</button>
    );
};

export default Order;