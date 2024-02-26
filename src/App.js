import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './redux/store';

import './App.css';
import Navbar from './common/Navbar';
import Main from './components/Main';
import SignIn from './components/SignIn';
import MainHome from './pages/MainHome';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/home-page' element={<MainHome />} />
              <Route path={'/movie-details/:id'} element={<MovieDetails />} />
            </Routes>
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
