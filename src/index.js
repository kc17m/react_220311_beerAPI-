import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import Random from "./components/random"
import Gallery from "./components/gallery"
import Details from "./components/Details"

ReactDOM.render(

  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/random" element={<Random />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery/:id" element={<Details />} />
        <Route path="/random" element={<Random />} />


      </Routes>
    </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
