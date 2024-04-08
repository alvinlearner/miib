import React from 'react'
import Navbar from './components/Navbar/Navbar';
// import Footer from './components/footer/Footer';
import Landing from './Landing'
import { Routes, Route } from "react-router-dom";
import Aboutpage from './components/about/Aboutpage';
import ContactUs from './Pages/contactus/Contact';
import Faqs from './Pages/faqs/Faqs';
import Personal from './Pages/products/Personal';

import Navbar2 from './components/Navbar/Navbar2';

function App() {

  return (
  
    <>
    <Navbar2/>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/contactus" element={<ContactUs />} />
    <Route path="/about" element={<Aboutpage />} />
    <Route path="/faqs" element={<Faqs />} />
    <Route path="/personal" element={<Personal />} />
    </Routes>
    {/* <Footer/> */}


    </>
  )
}

export default App
