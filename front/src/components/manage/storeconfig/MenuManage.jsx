import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import qs from 'qs';

import UI from '../../../styles/ui.module.css';
import axios from 'axios';

import Loading from '../../../screens/loading';
import MenuComponent from './MenuComponent';
import MenuEditComponent from './MenuEditComponent';

const MenuManage = () => {
    const [menuDatas, setMenuDatas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [onEdit, setonEdit] = useState(false);
    const location = useLocation();
    const URL = "/storemanage/menu";

    const deleteMenu = (id) => {
        setMenuDatas(
            menuDatas.filter((menuDatas) =>
            menuDatas.id !== id)
        );
    }

    const fetchData = async () => {
        const sch = location.search;
        const queryData = qs.parse(location.search, { ignoreQueryPrefix: true });
        const storeCode = queryData.storecode;

        setLoading(true);
        try {
            let response = await axios.get(URL, {
                headers: {
                    'storeCode': storeCode
                }});
            setMenuDatas(response.data);
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
        <div className={`${UI.body} ${UI.manage} `}>
            
            <div className={UI.navbar}>
            <div onClick={() => {setonEdit(!onEdit);}}>수정하기</div>
            <div>메뉴 관리</div>
            </div>
            <div className={UI.board}>
            {(onEdit === false) ? 
            menuDatas.map((menuData) => (
                <MenuComponent 
                key={menuData.id} 
                menuData={menuData}
                deleteMenu={deleteMenu}
                />
            ))
            : menuDatas.map((menuData) => (
                <MenuEditComponent 
                key={menuData.id} 
                menuData={menuData}
                deleteMenu={deleteMenu}
                />
            ))
            }
            </div>
        </div>
    );
}

export default MenuManage;