import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Auth from '../../components/login/Auth';
import { getNewb } from '../modules/signup';

const AuthContainer = () => {

    const dispatch = useDispatch();
    const sendinfo = useCallback((info) => dispatch(getNewb(info)), [dispatch]);

    return (
        <>
            <Auth sendinfo={sendinfo} />
        </>
    );

};

export default AuthContainer;