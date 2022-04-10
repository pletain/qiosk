import React, { useState } from 'react';
import axios from 'axios';

import UI from '../../../styles/ui.module.css';
import BTN from '../../../styles/button.module.css';

const MenuComponent = ({ menuData, deleteMenu }) => {
    const { itemname, description, price, imgsrc, soldOut, exposure, storeCode } = menuData;
    const [onToggle, setOnToggle] = useState(false);

    const toggleshow = () => {
        setOnToggle(!onToggle);
    }

    const deleteData = () => {
        const URL = "/storemanage/" + id + "/delete";
        axios.delete(URL,)
            .then(response => {
                deleteMenu(id);
                if (response.data != null) {
                    alert("주문이 처리됐습니다.");
                }
            })
    };

    return (
        <div className={UI.menuManage}>
            <div className={UI.menuManageName}>{itemname}</div>
            <div className={UI.menuInfoBoard}>
                {imgsrc && <img className={UI.menuImg} alt="상품이미지" src={imgsrc} />}
                <div className={UI.menuInfo}>
                    <div className={UI.menuDescription}>{description}</div>
                    <div className={UI.menuState}>
                        <span>가격</span>
                        <span>{price}원</span>
                    </div>
                    <div className={UI.menuState}>
                        <span>품절</span>
                        {(soldOut === true) ? 
                        <input className={UI.apple_switch} type="checkbox" checked disabled/>
                            : <input className={UI.apple_switch} type="checkbox" disabled/>
                        }
                    </div>

                    <div className={UI.menuState}>
                        <span>공개</span>
                        {(exposure === true)? 
                        <input className={UI.apple_switch} type="checkbox" checked disabled/>
                            : <input className={UI.apple_switch} type="checkbox" disabled/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuComponent;