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

        const payload = qs.stringify({
            grant_type: "authorization_code",
            client_id: REST_API_KEY,
            redirect_uri: REDIRECT_URI,
            code: code,
            client_secret: CLIENT_SECRET,
        });

        try {
            // access token 가져오기
            const res = await axios.post(
                "https://kauth.kakao.com/oauth/token",
                payload
            ); 
            console.log("res = ", res);
            console.log(res);
            const access_token = res.data.access_token;

            console.log(access_token);
            // Kakao Javascript SDK 초기화
            window.Kakao.init(REST_API_KEY);
            // access token 설정
            window.Kakao.Auth.setAccessToken(access_token);

            console.log("send to server");
            //서버에 access_token 전달
            axios.get('/kakao/signin', {
                headers: {
                    'Access_token': access_token
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
