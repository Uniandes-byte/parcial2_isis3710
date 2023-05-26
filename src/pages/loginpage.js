import React from 'react';
import logo from './logo.svg';
import banner from './banner.png'
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Formulario from './components/login';
import ListCafe from './components/listcafe';
import Container from "react-bootstrap/Container";
import NavBar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function LoginPage() {
  return (
    <div className="container">
          <h1>Inicio de sesión</h1>
          <Row>
            <div class="box">
              <Formulario/>   
            </div>          
          </Row>   
    </div>
  );
}

export default LoginPage;
