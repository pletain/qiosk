import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import qs from 'qs';

import UI from '../../styles/ui.module.css';
import axios from 'axios';

import Loading from '../../screens/loading';
import OrderComponent from './OrderComponent';

const OrderMange = () => {
    const [orderDatas, setOrderDatas] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();


    const deleteOrder = (_id) => {
        setOrderDatas(
            orderDatas.filter((orderData) =>
                orderData._id !== _id)
        );
    }

    const fetchData = async () => {
        const sch = location.search;
        const queryData = qs.parse(location.search, { ignoreQueryPrefix: true });
        const storeCode = queryData.storecode;

        setLoading(true);
        try {
            const response = await axios.get('/ordermanage/order', {
                headers: {
                    'storeCode': storeCode
                }});
            setOrderDatas(response.data);
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <Loading />
        );
    }

    return (
        <div className={`${UI.body} ${UI.orderManage} `}>
            <div className={UI.navbar}>
                주문내역
            </div>

            <div className={UI.board}>
                { orderDatas.length === 0 ? 
                <div className={UI.emptyObject}>
                    <img alt="empty-cart" width="100" src="/icon/receipt.png" />
                    <h3>접수된 주문이 없습니다</h3>
                </div>
                : <>{orderDatas.map((orderData) => (
                    <OrderComponent 
                        key={orderData._id} 
                        orderData={orderData}
                        deleteOrder={deleteOrder}
                    />
                    ))}
                    </>
                }
            </div>
        </div>
    );
};

export default OrderMange;