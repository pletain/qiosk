import cookies from 'react-cookies';

export default function SetToken(accessToken){
    const expires = new Date();
    expires.setDate(expires.getDate() + 30);
    cookies.save('accessToken', accessToken,
        {
            path: '/',
            expires,
        }
    );
}
