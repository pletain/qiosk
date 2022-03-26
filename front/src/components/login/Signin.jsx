import React from 'react';
import UI from "../../styles/ui.module.css";

export default function Signin() {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

    return (
        <div className={`${UI.login} ${UI.body}`}>
            <div className={UI.title}>QIOSK</div>
            <div className={UI.subtitle}>The most convenient table ordering system</div>
            <img id={UI.logo} alt="iphone" src="/icon/transition.gif" />
            <div className={UI.loginbanner} >
            <a href={KAKAO_AUTH_URL}>
                <img alt="kakao" src="/icon/kakao_login.png" />
            </a>
            </div>
        </div>
    );

}
