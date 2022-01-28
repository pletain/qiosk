import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import UI from '../../styles/manage.module.css';
import BTN from '../../styles/button.module.css';

const Signup = ({ data }) => {

    const navigate = useNavigate();

    const { id, name, phoneNumber } = data;
    const [info, setInfo] = useState({
        id: id,
        name: name,
        phoneNumber: phoneNumber,
    });

    const enterInfo = e => {
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
        console.log(res);
        navigate('/', { replace: true })
    }

    return (
        <div className={UI.orderMange}>
            <div className={UI.navbar}>
                <div className={UI.title}>회원가입</div>
            </div>

            <div id="singup" className={UI.orderBody}>
                <div className={UI.infoBody} >
                    <label className={UI.description} >아이디</label>
                    <input name="id" onChange={enterInfo} className={UI.infoExist} type="text" name="val" readOnly value={id} />
                    <label className={UI.description} >이름</label>
                    <input name="name" onChange={enterInfo} className={UI.infoExist} type="text" name="val" readOnly value={name} />
                    <label className={UI.description} id={UI.need} >*필수입력 - 전화번호</label>
                    <input name="phoneNumber" placeholder="010-xxxx-xxxx" onChange={enterInfo} className={UI.infoField} />
                </div>
            </div>

            <div>
                <button className={BTN.order} onClick={() => {
                    sendInfo();
                }}>가입 완료</button>
            </div>
        </div>
    );
};

export default Signup;
