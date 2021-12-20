import React, {useState, useEffect } from 'react';
import "./App.css";
import Axios from "axios";

function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    Axios.get("/order").then((response) => {
      if(response.data) {
        setUser(response.data);
      } else {
        alert("failed to");
      }
    }) ;
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      <h1>{JSON.stringify(user.itemname, null, 2)}</h1>
      <h1>23</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  )
}
export default App;