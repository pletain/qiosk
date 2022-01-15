import React from 'react';
import MenuContainer from './store/containers/MenuContainer';
import CartContainer from './store/containers/CartContainer';
import OrderManage from './components/OrderManage'
import { Link, Route, Routes } from 'react-router-dom';
import styles from './styles/icon.module.css';


const App = () => {

  return (
      <div> 
        <Routes>
          <Route path="/" element={<><MenuContainer /><Link to="/cart" ><img className={styles.cart} alt="cart-icon" src="/icon/shopping-cart.png" /></Link></>} exact={true} />
          <Route path="/cart" element={<><CartContainer /></>} exact={true} />
          <Route path="/manage" element={<><OrderManage /></>} exact={true} />
        </Routes>
      </div>
  )
}
export default App;
