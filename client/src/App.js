import React from 'react';
import './App.css';
import Registration from "./components/Registration";
import Login from "./components/Login";

function App() {
  return (
    <div className="container mt-5">
        <div className="row justify-content-around">
            <div className="col-5">
                <Registration/>
            </div>
            <div className="col-5">
                <Login/>
            </div>
        </div>
    </div>
  );
}

export default App;
