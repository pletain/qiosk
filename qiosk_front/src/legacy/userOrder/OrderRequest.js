import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderRequest = OrderList => {
    const [loading, setLoading] = useState(false);
    const Data = OrderList.OrderList;


    const sendOrder = () => {
        const fetchData = async () => {
            setLoading(true);
            try {
                console.log(Data);
                await axios.post('/order', Data);
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

    return <button onClick={sendOrder}>주문하기</button>;
};

export default OrderRequest;