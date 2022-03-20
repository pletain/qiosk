import React from 'react';
import UI from "../../styles/ui.module.css";

export default function Signin() {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

    return (
        <div className={`${UI.login} ${UI.body}`} id={UI.test}>
            <div className={UI.title}>QIOSK</div>
            <div className={UI.subtitle}>The most convenient table ordering system</div>
            <img id={UI.logo} alt="iphone" src="/icon/transition.gif" />
            <a className={UI.loginbanner} href={KAKAO_AUTH_URL}>
                <img href={KAKAO_AUTH_URL} alt="kakao" src="/icon/kakao_login.png" />
            </a>
        </div>
    );

}
