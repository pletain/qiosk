import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Auth from '../../components/login/Auth';
import { getNewb } from '../modules/signup';

const AuthContainer = () => {

    const dispatch = useDispatch();
    const tbnum = useSelector(state => state.cart);
    const sendinfo = useCallback((info) => dispatch(getNewb(info)), [dispatch]);
    console.log("!!@@@@@@@@@@@@@@@@@@");
    console.log(tbnum);

    return (
        <>
            <Auth sendinfo={sendinfo} />
        </>
    );

};

export default AuthContainer;