import React from 'react'
import Navbar from './components/Navbar/Navbar';
// import Footer from './components/footer/Footer';
import Landing from './Landing'
import { Routes, Route } from "react-router-dom";
import Aboutpage from './components/about/Aboutpage';


import Navbar2 from './components/Navbar/Navbar2';

function App() {

  return (
  
    <>
    <Navbar2/>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/about" element={<Aboutpage />} />
    </Routes>
    {/* <Footer/> */}


    </>
  )
}

export default App
