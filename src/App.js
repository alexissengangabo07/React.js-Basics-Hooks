import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Incrementeur from './components/incrementeur/Incrementeur';
import Client from './components/clients/Client';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client" element={<Client />} />
        <Route path="/incrementeur" element={<Incrementeur />} />
      </Routes>
    </div>
  )
}

export default App