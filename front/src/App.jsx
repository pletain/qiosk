import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import MenuContainer from './store/containers/MenuContainer';
import CartContainer from './store/containers/CartContainer';
import AuthContainer from "./store/containers/AuthContainer";
import SignupContainer from "./store/containers/SignupContainer";

import InvalidTable from "./screens/invalidTable";
import Page404 from "./screens/page404";
import Manage from "./screens/manage";
import OrderManage from './components/manage/order/OrderManage';
import MenuManage from './components/manage/storeconfig/MenuManage'

import Signin from "./components/login/Signin";

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/menu" element={<><MenuContainer /></>}/>
        <Route path="/cart" element={<><CartContainer /></>}/>

        <Route path="/manage" element={<><Manage/></>}/>
        <Route path="/manage/order" element={<><OrderManage /></>}/>
        <Route path="/manage/menu" element={<><MenuManage /></>}/>

        <Route path="/oauth/kakao" element={<><AuthContainer /></>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<SignupContainer />}/>
        <Route path="/unselected" element={<InvalidTable />}/>
        <Route path="/*" element={<Page404 />}/>
      </Routes>
    </div>
  )
}
export default App;


