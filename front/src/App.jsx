import React from 'react';
import MenuContainer from './store/containers/MenuContainer';
import CartContainer from './store/containers/CartContainer';
import OrderManage from './components/manage/OrderManage'
import { Route, Routes, Navigate } from 'react-router-dom';
import AuthContainer from "./store/containers/AuthContainer";
import SignupContainer from "./store/containers/SignupContainer";
import Signin from "./components/login/Signin";
import Page404 from "./screens/page404";
import InvalidTable from "./screens/invalidTable";

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
        <Route path="/unselected" element={<InvalidTable />}/>
        <Route path="/*" element={<Page404 />}/>
      </Routes>
    </div>
  )
}
export default App;


