import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from '../src/pages/home/index'
import {NavBar} from '../src/components/navBar/NavBar';

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>

          <Route path={"/"} exact element={<Home/>}/>
        </Routes>

    
    </BrowserRouter>
  );
}

export default App;
