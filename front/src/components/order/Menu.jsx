import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UI from '../../styles/ui.module.css';
import BTN from '../../styles/button.module.css';
import styles from '../../styles/icon.module.css';
import axios from 'axios';
import { useSnackbar } from 'react-simple-snackbar';
import cookies from 'react-cookies';
import Badge from '@material-ui/core/Badge';

const Menu = ({ add, ItemQuantity }) => {
    
    if(ItemQuantity === undefined){
        ItemQuantity = 0;
    }
    
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
    const [quantity, setQuantity] = useState(ItemQuantity);
    const [openSnackbar] = useSnackbar(options);

    useEffect(() => {
        const storeCode = cookies.load('storeCode');
        console.log(storeCode);
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('/order', {
                headers: {
                    'storeCode': storeCode
                }});
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
        <div className={UI.menuBody}>
            <div className={UI.menubar}>
                <div className={UI.title}>장인라멘 영등포점</div>
                <div className={UI.category}>
                    <div className={BTN.capsule}>#라멘</div>
                    <div className={BTN.capsule}>#돈카츠</div>
                    <div className={BTN.capsule}>#카레</div>
                </div>
            </div>
            <div className={UI.menuboard}>
                {itemDatas.map((itemData) => {
                    const { id, itemname, price, description, imgsrc } = itemData;

                    return (
                        <div className={UI.menu} key={id} onClick={() => {
                            add(itemData);
                            setQuantity(quantity + 1);
                            openSnackbar(itemname + ' 선택하셨습니다.', [2000]);
                        }}>
                            <div className={UI.menuDetail}>
                                <span className={UI.menuName}>{itemname}</span>
                                <span className={UI.menuDesc}>{description}</span>
                                <div className={UI.menuPrice}>{price}원</div>
                            </div>
                            <div>
                                {imgsrc && <img className={UI.menuImg} alt="상품이미지" src={imgsrc} />}
                            </div>
                        </div>
                    )

                })}
            </div>

            <div className={styles.cartbox}>
                <Badge color="error" overlap="circular" badgeContent={quantity} max={99}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <Link to="/cart" ><img className={styles.cart} alt="cart-icon" src="/icon/shopping-bag.png" /></Link>
                </Badge>
            </div>



        </div>
    );
};

export default Menu;