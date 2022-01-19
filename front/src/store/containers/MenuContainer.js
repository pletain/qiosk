import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Menu from '../../components/Menu';
import { useLocation } from 'react-router';
import qs from 'qs';
import { addCart, recordTable } from '../modules/cart';


const MenuContainer = () => {

    const location = useLocation();
    const sch = location.search;
    console.log(sch);

    const queryData = qs.parse(location.search, { ignoreQueryPrefix: true });
    const tbnum = queryData.tbnum;
    console.log(queryData);
    console.log(tbnum);
    
    const dispatch = useDispatch();

    const add = useCallback(item => dispatch(addCart(item)), [dispatch]);
    const record = useCallback(tbnum => dispatch(recordTable(tbnum)), [dispatch]);

    record(tbnum);

    return (
        <>
            <Menu add={add} />
        </>
    );

};

export default MenuContainer;