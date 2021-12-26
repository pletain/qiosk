import React, { useState, useEffect } from 'react';
import "./App.css";
import axios from "axios";
import ItemList from "./userOrder/ItemList";

const App = () => {

  return (
    <div className="App">
        <div>
          <h1>장인라멘 영등포점</h1>
        </div>

        <div>
          <h3>메뉴</h3>
          <div>
            <img src="https://qioskbucket.s3.ap-northeast-2.amazonaws.com/ragdoll.jpg" />
            <div>
            <ItemList />
            </div>
          </div>
        </div>
    </div>
  )
}
export default App;