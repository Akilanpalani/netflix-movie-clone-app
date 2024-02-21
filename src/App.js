import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './common/Navbar';
import Main from './components/Main';
import SignIn from './components/SignIn';
import MainHome from './pages/MainHome';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/home-page' element={<MainHome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
