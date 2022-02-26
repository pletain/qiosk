import React from 'react';
import UI from "../../styles/login.module.css";

export default function Signin() {

    const REST_API_KEY = "223392a6512c6867ae141bab90e937f2";
    const REDIRECT_URI = "https://3000-cs-438668832993-default.cs-asia-east1-jnrc.cloudshell.dev/oauth/kakao";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return (
        <div className={UI.body}>
            <div className={UI.title}>QIOSK</div>
            <div className={UI.subtitle}>The most convenient ordering system</div>
            <img id={UI.logo} alt="iphone" src="/icon/iphone.png" />
            <div className={UI.loginbanner}>
                    <a href={KAKAO_AUTH_URL}><img alt="kakao" src="/icon/kakao_login.png" /></a>
                    {/* <a href=""><img alt="naver" src="icon/naver_login.png" /></a> */}
                </div>
        </div>

    );
}
