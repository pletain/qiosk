import React, { useState, useEffect } from 'react';
import Item from './Item'
import axios from 'axios';

const ItemList = () => {
    const [itemDatas, setItemDatas] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('/order',);
                setItemDatas(response.data);
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
    if (!itemDatas) {
        return null;
    }

    return(
        <div>
            {itemDatas.map(itemData => (
                <Item key={itemData.id} itemData={itemData} />
            ))}
        </div>
    );
};

export default ItemList;