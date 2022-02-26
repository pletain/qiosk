import React from 'react';
import MenuContainer from './store/containers/MenuContainer';
import CartContainer from './store/containers/CartContainer';
import OrderManage from './components/manage/OrderManage'
import styles from './styles/icon.module.css';
import { Route, Routes, Link } from 'react-router-dom';
import AuthContainer from "./store/containers/AuthContainer";
import SignupContainer from "./store/containers/SignupContainer";
import Signin from "./components/login/Signin";

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<><MenuContainer /><Link to="/cart" ><img className={styles.cart} alt="cart-icon" src="/icon/shopping-cart.png" /></Link></>} exact={true} />
        <Route path="/cart" element={<><CartContainer /></>} exact={true} />
        <Route path="/manage" element={<><OrderManage /></>} exact={true} />
        <Route path="/oauth/kakao" element={<><AuthContainer /></>} exact={true} />
        <Route path="/signin" element={<Signin/>} exact={true} />
        <Route path="/signup" element={<SignupContainer />} exact={true} />
      </Routes>
    </div>
  )
}
export default App;


