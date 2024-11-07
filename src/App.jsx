import React, { useEffect } from 'react';
import './App.css';
import {Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './components/Home';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Title from './components/Title';


const App = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location]);

  return (
    <>
      
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
    </>
  );
};


export default App;

