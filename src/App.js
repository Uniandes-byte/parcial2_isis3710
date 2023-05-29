import React from 'react';
import './App.css';
import ListCafe from './components/listcafe';
import Login from './components/login';
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IntlProvider, FormattedMessage } from 'react-intl';

function App() {
  
  const language = navigator.language || navigator.userLanguage;
  console.log(language)
  let messages;

  if(language.includes("en") || language.includes("EN") || language.includes("en-EN")){
      messages = require('./locales/en.json');
  }
  else if(language.includes("es") || language.includes("ES") || language.includes("es-ES")){
      messages = require('./locales/es.json');
  }
  else{
      messages = require('./locales/es.json');
  }
  return (
    <div className="container">
      <IntlProvider locale={language} messages={messages}>
        <NavBar></NavBar>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login lang={language}/>} />
            <Route path="/login" element={<Login lang={language}/>} />
            <Route path="/cafes" element={<ListCafe lang={language}/>} />
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
        </IntlProvider> 
    </div>
  );
}

export default App;
