import React, { useState, useEffect } from 'react';
import "./App.css";
import ItemList from "./userOrder/ItemList";
import OrderRequest from "./userOrder/OrderRequest";

const sampleOrderList = {
  "clientId": "2019112151",
  "orders": [
    {
      "orderId": "1",
      "clientId": "null",
      "itemName": "가츠동",
      "quantity": "2"
    },
    {
      "orderId": "2",
      "clientId": "null",
      "itemName": "사케동",
      "quantity": "1"
    }
  ]
}

const App = () => {

  return (
    <div className="App">
      <div>
        <h1>장인라멘 영등포점</h1>
      </div>

      <div>
        <h3>메뉴</h3>
        <div>
          <ItemList />
        </div>
      </div>
      <div>
        <OrderRequest OrderList={sampleOrderList} />
      </div>
    </div>
  )
}
export default App;