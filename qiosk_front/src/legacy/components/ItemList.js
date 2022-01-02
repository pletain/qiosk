import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = ({add}) => {

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

    return (
        <>
            <div>
                {itemDatas.map((itemData) => {
                    const { id, itemname, price, quantity, description, imgsrc } = itemData;

                    return (
                    <div key={id}>
                        {imgsrc && <img src={imgsrc} />}
                    <div>
                            <h2>{itemname}</h2>
                            <h3>{price}</h3>
                            <h3>{quantity}</h3>
                            <p>{description}</p>
                        </div>
                        <button onClick={() => add(id)}>
                            추가하기
                        </button>
                    </div>
            )
            })}
        </div>
        </>
    );
};

export default ItemList;
