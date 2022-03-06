import React from 'react';
import MenuContainer from './store/containers/MenuContainer';
import CartContainer from './store/containers/CartContainer';
import OrderManage from './components/manage/OrderManage'
import { Route, Routes, Navigate } from 'react-router-dom';
import AuthContainer from "./store/containers/AuthContainer";
import SignupContainer from "./store/containers/SignupContainer";
import Signin from "./components/login/Signin";

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/menu" element={<><MenuContainer /></>}/>
        <Route path="/cart" element={<><CartContainer /></>}/>
        <Route path="/manage" element={<><OrderManage /></>}/>
        <Route path="/oauth/kakao" element={<><AuthContainer /></>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<SignupContainer />}/>
      </Routes>
    </div>
  )
}
export default App;


