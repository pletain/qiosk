import React from 'react';
import MenuContainer from './store/containers/MenuContainer';
import CartContainer from './store/containers/CartContainer';
import { Link, Route, Routes } from 'react-router-dom';
import Modal from 'react-modal';


const App = () => {

  return (
    <div align="center">
      <div>

        <Routes>
          <Route path="/" element={<><MenuContainer /><Link to="/cart" style={{position: 'fixed', bottom:10, right:10}} ><img alt="cart-icon" src="https://qioskbucket.s3.ap-northeast-2.amazonaws.com/icon/cart.png" width="50" height="50" /></Link></>} exact={true} />
          <Route path="/cart" element={<><CartContainer /><div></div></>} exact={true} />
      </Routes>
    </div>
    </div >
  )
}
export default App;

Modal.setAppElement('#root')
