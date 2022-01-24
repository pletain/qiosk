import React from 'react';
import MenuContainer from './store/containers/MenuContainer';
import CartContainer from './store/containers/CartContainer';
import OrderManage from './components/manage/OrderManage'
import styles from './styles/icon.module.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Auth from "./components/login/Auth";
import Profile from "./components/login/Profile";

const App = () => {

  const REST_API_KEY = "223392a6512c6867ae141bab90e937f2";
  const REDIRECT_URI = "https://3000-c3b8c88d-18cc-4a7b-bc21-cde7aea3fe6d.cs-asia-east1-jnrc.cloudshell.dev/oauth/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;


  return (
    <div>
      <Routes>
        <Route path="/" element={<><MenuContainer /><Link to="/cart" ><img className={styles.cart} alt="cart-icon" src="/icon/shopping-cart.png" /></Link></>} exact={true} />
        <Route path="/cart" element={<><CartContainer /></>} exact={true} />
        <Route path="/manage" element={<><OrderManage /></>} exact={true} />
        <Route path="/signup" element={<><div>회원가입</div></>} exact={true} />
        <Route path="/signin" element={<><a href={KAKAO_AUTH_URL}><img alt="kakao" src="/icon/kakao_login.png" /></a></>} exact={true} />
        <Route path="/oauth/kakao" element={<><Auth /></>} exact={true} />
        <Route path="/profile" element={<><Profile /></>} exact={true} />
      </Routes>
    </div>
  )
}
export default App;


