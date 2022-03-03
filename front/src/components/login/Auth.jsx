import { useEffect } from "react";
import cookies from 'react-cookies';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Auth = ({ sendinfo }) => {
    // calllback으로 받은 인가코드
    const code = new URL(window.location.href).searchParams.get("code");

    const navigate = useNavigate();

    const getToken = async () => {

        try { 
            console.log(code);
            axios.get('/kakao/signin', {
                headers: {
                    'Authorization_code': code
                }
            })
                .then((res) => {
                    const { accessToken, unregistered_member } = res.data;
                    if (res.status === 201) {
                        alert("가입되지 않은 사용자!");
                        console.log(res);
                        console.log("가입되지 않은 사용자입니다!!!!");
                        console.log(unregistered_member);
                        sendinfo(unregistered_member);
                        navigate('/signup', { replace: true });
                    } else if (res.status === 200) {
                        // alert("가입완료함");
                        console.log(accessToken);

                        try {
                            const expires = new Date();
                            expires.setMinutes(expires.getMinutes() + 10);
                            cookies.save('accessToken', accessToken,
                                {
                                    path: '/',
                                    expires,
                                }

                            );
                            console.log("cookies!");
                            console.log(cookies.load('accessToken'));
                            navigate('/menu', { replace: true });
                        }
                        catch (err) {
                            console.log(err);
                        }
                    }
                }).catch((err) => console.log(err))

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getToken();
    }, []);


    return null;
};

export default Auth;
