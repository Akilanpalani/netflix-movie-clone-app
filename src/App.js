import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';
import Navbar from './common/Navbar';
import Main from './components/Main';
import SignIn from './components/SignIn';
import MainHome from './pages/MainHome';
import MovieDetails from './pages/MovieDetails';
import SignupStepper from './pages/SignupStepper';
import ProfilePage from './pages/ProfilePage';

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signin' element={<SignIn />} />
          <Route
            path='/home-page'
            element={isAuthenticated ? <MainHome /> : <Navigate to='/signin' />}
          />
          <Route path={'/movie-details/:id'} element={<MovieDetails />} />
          <Route path='/signup' element={<SignupStepper />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
