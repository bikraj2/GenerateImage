import './App.css';

import React from 'react';
import { useState } from 'react';
import Navbar from './components/navbar'
import SearchResult from './Pages/search';
import { Routes,Route } from 'react-router-dom';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import History from './Pages/History';
function App() {

  return (
    <div className='main'>
      <Navbar />
      <Routes>
        <Route path='/' element={<SearchResult />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
