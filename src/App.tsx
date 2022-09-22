import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/login';
import { Signup } from './components/signup';
import { Home } from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation';

function App() {
  return <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>;
}

export default App;
