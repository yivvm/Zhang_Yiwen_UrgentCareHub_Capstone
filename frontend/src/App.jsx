import './App.css'

//#region Page imports
import Nav from './components/Nav/Nav'
import Home from './pages/Home/Home'
import Doctors from './pages/Doctors/Doctors';
import Schedule from './pages/Schedule/Schedule';
import Account from './pages/Account/Account';

// import About from './pages/About/About'
//#endregion

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom' 
import Footer from './components/Footer/Footer';

//#region Functional Components
function App() {
  // const [currentId, setCurrentId] = useState(0)

  return (
    <div className='App'>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/account' element={<Account />} />
      </Routes>

      <Footer />

    </div>
  )
}
//#endregion

export default App
