import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{overflowX: 'hidden'}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact-form" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
export default App;