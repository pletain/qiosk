import { useEffect } from "react";
import cookies from 'react-cookies';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Auth = ({ sendinfo }) => {
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
                    const { accessToken, unregistered_member } = res.data;
                    if (res.status === 201) {
                        alert("가입되지 않은 사용자!");
                        console.log(res);
                        sendinfo(unregistered_member);
                        history('/signup', { replace: true });
                    } else if (res.status === 200) {
                        alert("가입완료함");
                        console.log(accessToken);

                        try {
                            cookies.save('accessToken', accessToken, 
                                    {
                                        path: '/',
                                    }
                            
                                    );
                            console.log(cookies.load('accessToken'));
                            // setCookie('accessToken', "kkkkkkkkkkkkkkkk09005");
                            // cookies.set('accessToken', accessToken, {
                            //     httpOnly: true,
                            // });
                            // const gettoken = cookies.get('accessToken');
                            console.log("cookies!");
                        }
                        catch (err) {
                            console.log(err);
                        }
                        
                        
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
