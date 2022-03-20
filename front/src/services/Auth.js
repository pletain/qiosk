import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cookies from 'react-cookies';
import axios from "axios";
import Loading from "../screens/loading";

const Auth = ({ sendinfo }) => {
    const navigate = useNavigate();

    // callback으로 받은 인가코드
    const code = new URL(window.location.href).searchParams.get("code");

    const getToken = async () => {
        try { 
            console.log(code); 
            axios.get('/kakao/signin', {
                headers: {
                    'Authorization_code': code
                }
            })
                .then((res) => {
                    const { accessToken, newb } = res.data;
                    if (res.status === 201) {
                        alert("회원가입 페이지로 이동합니다");
                        sendinfo(newb);
                        navigate('/signup', { replace: true });
                    } else if (res.status === 200) {
                        try {
                            const expires = new Date();
                            expires.setMinutes(expires.getMinutes() + 100);
                            cookies.save('accessToken', accessToken,
                                {
                                    path: '/',
                                    expires,
                                }
                            );
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

    return (
        <Loading />
    );
};

export default Auth;
