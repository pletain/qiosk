import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Menu from '../../components/order/Menu';
import { useLocation } from 'react-router';
import qs from 'qs';
import { addCart, recordTable } from '../modules/cart';
import { useNavigate } from "react-router-dom";
import { checkToken } from '../modules/checkToken';
import cookies from 'react-cookies';


const MenuContainer = () => {
    const navigate = useNavigate();
    const LoggedIn = checkToken();
    const location = useLocation();
    const dispatch = useDispatch();
    const ItemQuantity = useSelector(state => state.cart.totalQuantity);

    const add = useCallback(item => dispatch(addCart(item)), [dispatch]);
    const record = useCallback(tbnum => dispatch(recordTable(tbnum)), [dispatch]);

    useEffect(() => {
        const sch = location.search;
        const queryData = qs.parse(location.search, { ignoreQueryPrefix: true });
        const tbnum = queryData.tbnum;
        const pretbnum = cookies.load('tableNum');

        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 30);
        
        if (!isNaN(Number(tbnum))) {
            cookies.save('tableNum', tbnum,
                {
                    path: '/',
                    expires
                }
            );
            navigate('/menu', { replace: true });   
        }
        else if (isNaN(Number(pretbnum))) {
            navigate('/unselected', { replace: true });
        }
        else {
            navigate('/menu', { replace: true });
        }

        if (LoggedIn === undefined) {
            record(tbnum);
            alert("로그인이 필요한 서비스입니다.");
            return navigate("/signin", { replace: true });
        }
    }, []);

    return (
        <>
            <Menu ItemQuantity={ItemQuantity} add={add} />
        </>
    );


};

export default MenuContainer;