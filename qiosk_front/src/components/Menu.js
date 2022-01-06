import React, { useState, useEffect } from 'react';
import styles from '../styles/client.module.css';
import axios from 'axios';
import Modal from 'react-modal';

const ItemList = ({ add }) => {

    const [itemDatas, setItemDatas] = useState(null);
    const [loading, setLoading] = useState(false);
    const [alertIsOpen, setAlertIsOpen] = useState(false);

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
                <div>
                    <Modal isOpen={alertIsOpen} onRequestClose={() => setAlertIsOpen(false)} >
                        장바구니에 담겼습니다.
                    </Modal>
                </div>
                {itemDatas.map((itemData) => {
                    const { id, itemname, price, description, imgsrc } = itemData;

                    return (
                        <div key={id} className={styles.item} onClick={() => {
                            add(itemData);
                            setAlertIsOpen(true);
                            setTimeout(() => { setAlertIsOpen(false); }, 1000)
                        }}>
                            {imgsrc && <img alt="상품이미지" src={imgsrc} width="300" height="300" />}
                            <div>
                                <h2>{itemname}</h2>
                                <h3>{price}</h3>
                                <p>{description}</p>
                            </div>
                            <hr />
                        </div>

                    )
                })}
            </div>
        </>
    );
};

export default ItemList;