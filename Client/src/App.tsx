import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Orderconfirm from './components/Orderconfirm';
function App() {
  return (
    <div >
      <Router>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/' element={<Home/>}></Route>  
        <Route path='/checkout' element={<Checkout/>}></Route>  
        <Route path='/orderconfirm' element={<Orderconfirm/>}></Route>  
        </Routes>  
      </Router>

    </div>
  );
}

export default App;
