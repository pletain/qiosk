import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Menu from '../../components/Menu';
import StoreSign from '../../components/StoreSign';
import { addCart } from '../modules/cart';


const MenuContainer = () => {
    const dispatch = useDispatch();

    const add = useCallback(item => dispatch(addCart(item)), [dispatch]);

    return (
        <>
            {/* <StoreSign name={"라멘트럭 딜리버리 영등포점"} imgsrc={"/icon/storemain.jpeg"} /> */}
            <Menu add={add} />
        </>
    );

};

export default MenuContainer;