
import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Menu from './Components/Menu';






function App() {
  return (
    <div>
       <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>/
        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
