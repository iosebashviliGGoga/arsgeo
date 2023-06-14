import React from 'react'
import {Route , Routes, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'


import Header from './components/Header';
import About from './components/About';
import ScrollToTop from './components/Contexts/ScrollToTop'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chronicle from './components/Chronicle';
import Authors from './components/Authors';
import Links from './components/Links';
import Landings from './components/Landings';
import Articles from './components/Articles';
import Articles1 from './components/Articles1';
import Search from './components/Search';
import News from './components/News';
import News1 from './components/News1';
import Rubrics from './components/Rubrics';
import Rubrics1 from './components/Rubrics1';
import Chronicles1 from './components/Chronicles1';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <Header/>
      <AnimatePresence>
      <ScrollToTop/>
      <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Landings/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>

          <Route path='/chronicle' element={<Chronicle/>}/>
          <Route path='/chronicle/:id' element={<Chronicles1/>}/>

          <Route path='/for-authors' element={<Authors/>}/>

          <Route path='/links' element={<Links/>}/>

          <Route path='/magazine' element={<Landings/>}/>
          <Route path='/magazine/:id' element={<Articles/>}/>
          <Route path='/magazine/:id/:id2' element={<Articles1/>}/>

          <Route path='/search/:id' element={<Search/>}/>

          <Route path='/news' element={<News/>}/>
          <Route path='/news/:id' element={<News1/>}/>
          
          <Route path='/rubrics/:id' element={<Rubrics/>}/>
          <Route path='/rubrics/:id/:id2' element={<Rubrics1/>}/>


          

      </Routes>
      </AnimatePresence>
      <Footer/>
      
    </>
  )
}

export default AnimatedRoutes