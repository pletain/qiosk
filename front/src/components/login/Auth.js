import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
const Auth = ({ sendinfo }) => {
    const REST_API_KEY = "223392a6512c6867ae141bab90e937f2";
    const REDIRECT_URI = "https://3000-c3b8c88d-18cc-4a7b-bc21-cde7aea3fe6d.cs-asia-east1-jnrc.cloudshell.dev/oauth/kakao";
    const CLIENT_SECRET = "p9iuf6DDf3WydhBHR9YwnDWOngEmozRr";

    // calllback으로 받은 인가코드
    const code = new URL(window.location.href).searchParams.get("code");

    const history = useNavigate();

    const getToken = async () => {

        try {
            console.log(code);
            axios.get('/kakao/signin', {
                headers: {
                    'Authorization_code': code
                } 
            })
                .then((res) => {
                    if (res.status === 201) {
                        alert("가입되지 않은 사용자!");
                        console.log(res);
                        sendinfo(res.data);
                        history('/signup', { replace: true });
                    } else if (res.status === 200) {
                        alert("가입완료함");
                        history('/', { replace: true });
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
