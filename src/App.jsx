import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Incrementeur from './components/incrementeur/Incrementeur';
import Client from './components/clients/Client';
import Home from './components/home/Home';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
        <main className='app'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/client" element={<Client />} />
            <Route path="/incrementeur" element={<Incrementeur />} />
            <Route path="*" element={<Home/>} />
        </Routes>
        </main>
    </>
  )
}

export default App