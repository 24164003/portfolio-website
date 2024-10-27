import React from 'react'

import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavScrollExample from './Navbar';
import Herosection from './Herosection';
import Contactanimation from './Contactanimation';
import Blogheadline from './Blog/Blogheadline';
import Blog from './Blog/Blog';
import About from './About';

import Breaker from './Breaker';
import Breaker2 from './Breaker2';
import Qualification from './Qualification';
import Gallery from './Gallery';

const App = () => {
  return (
    <div>
      {/* <button><a href='#shonal-appi'>
        Button for navigation
      </a></button> */}
      {/* Navbar */}
      <NavScrollExample />
      {/* Herosection */}
      {/* <Herosection /> */}
      {/* Blogsection */}
      {/* <Blogheadline /> */}
      {/* <Blog /> */}
      {/* Technicalsection */}
      {/* <Technicalsection /> */}
      {/* Breaker */}
      {/* <Breaker /> */}
      {/* Aboutsection */}
      {/* <Aboutsection /> */}
      {/* Breaker2 */}
      {/* < Breaker2 /> */}
      {/* Blogsection */}
      {/* <Blogsection /> */}
      {/* Breaker */}
      {/* <Breaker /> */}

      {/* Routing */}
      <Routes>
        <Route path='/' element={
          <div>
            <Herosection />
            <Contactanimation />
          </div>
        }
        />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={
          <div>
            <Blogheadline />
            <Blog />
          </div>
        } />
       <Route path='/gallery' element={<Gallery />} />
      </Routes>

    </div>
  )
}

export default App