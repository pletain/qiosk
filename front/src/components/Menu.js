import React, { useState, useEffect } from 'react';
import styles from '../styles/client.module.css';
import axios from 'axios';
import { useSnackbar } from 'react-simple-snackbar'


const ItemList = ({ add }) => {

    const options = {
        position: 'top-center',
        style: {
            fontSize: '13px',
            textAlign: 'center',
            borderRadius: '50px',
            width: '50%',
            
        },
        closeStyle: {
            display: 'none',
        }
    }

    const [itemDatas, setItemDatas] = useState(null);
    const [loading, setLoading] = useState(false);
    const [openSnackbar] = useSnackbar(options);

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
        return <div><img alt="불러오는중..." width="25" align="center" src="/icon/loading.gif" /></div>
    }
    if (!itemDatas) {
        return null;
    }

    return (
        <div className={styles.menuContent}>
            {itemDatas.map((itemData) => {
                const { id, itemname, price, description, imgsrc } = itemData;

                return (
                    <div className={styles.menu} key={id} className={styles.item} onClick={() => {
                        add(itemData);
                        openSnackbar(itemname + ' 선택하셨습니다.', [2000]);
                    }}>
                        {imgsrc && <img alt="상품이미지" src={imgsrc} width="300" height="300" />}
                        <div>
                            <h2>{itemname}</h2>
                            <h3>{price}원</h3>
                            <p>{description}</p>
                        </div>
                        <hr />
                    </div>

                )
            })}
        </div>
    );
};

export default ItemList;