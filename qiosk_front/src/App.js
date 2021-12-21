import React, {useState, useEffect } from 'react';
import "./App.css";
import Axios from "axios";

function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    Axios.get("/pic").then((response) => {
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
      <h1></h1>
      <img src="https://localhost:10001/pic" alt="" style="height: 300px;"></img>
      <h1>23</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  )
}
export default App;