import React from 'react'
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Componets/Home/Home';
import Women from './Componets/Women/Women';
import Men from './Componets/Men/Men';
import Register from './Componets/Registration/Registration';
import Cart from './Componets/Cart/Cart';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/women' element={<Women/>}/>
        <Route path ='/men' element={<Men/>}/>
        <Route path = '/registration' element ={<Register/>}/>
        <Route path = '/cart' element ={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App;
