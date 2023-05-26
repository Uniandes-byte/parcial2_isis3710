import React from 'react';
import './App.css';
import Formulario from './components/login';
import ListCafe from './components/listcafe';
import NavBar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
        <NavBar></NavBar>
          <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Formulario />} />
            <Route path="/cafes" element={<ListCafe />} />
          </Routes>
     </BrowserRouter>  
    </div>
  );
}

export default App;
