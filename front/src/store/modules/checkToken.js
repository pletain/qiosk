import cookies from 'react-cookies';

const COOKIENAME = 'accessToken';


export const checkToken = () => {
    return cookies.load(COOKIENAME);
}