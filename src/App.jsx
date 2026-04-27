import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Rumah from './pages/Rumah';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={
          <>
            <Navbar />
            <Profile />
            <Footer />
          </>
        } />
        <Route path="/rumah" element={
          <>
            <Navbar />
            <Rumah />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}


export default App;
