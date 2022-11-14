import React from 'react';
import { Route, Routes } from 'react-router';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import LoginNavBar from './components/LoginNavBar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<LandingPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
