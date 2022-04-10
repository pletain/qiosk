import React, { useState } from 'react';
import axios from 'axios';

import UI from '../../../styles/ui.module.css';
import BTN from '../../../styles/button.module.css';

const MenuEditComponent = ({ menuData, deleteMenu }) => {
    const { itemname, description, price, imgsrc, soldOut, exposure, storeCode } = menuData;

    const [info, setInfo] = useState({
        itemname: itemname,
        description: description,
        price: price,
        imgsrc: imgsrc,
        soldOut: soldOut,
        exposure: exposure,
        storeCode: storeCode,
    });

    const syncInfo = e => {
        const { value, name } = e.target;
        setInfo({
            ...info,
            [name]: value
        });
    };

    const sendInfo = async () => {
        const res = await axios.post(
            "kakao/signup",
            info
        );
    }


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
            <input name="itemname" placeholder="메뉴이름" onChange={syncInfo} className={UI.menuManageName} value={info.itemname}/>
            <div className={UI.menuManageName}></div>
            <div className={UI.menuInfoBoard}>
                {imgsrc && <img className={UI.menuImg} alt="상품이미지" src={imgsrc} />}
                <div className={UI.menuInfo}>
                    <input name="description" placeholder="메뉴 상세설명 블록 메뉴에 대한 설명이 명시되는 블록"
                    onChange={syncInfo} className={UI.menuDescription} value={info.description}/>
                    <div className={UI.menuState}>
                        <span>가격</span>
                        <input name="price" placeholder="메뉴가격" onChange={syncInfo} value={info.price}/>
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

export default MenuEditComponent;