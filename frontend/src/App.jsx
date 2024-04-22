import './App.css'

//#region Page imports
import Nav from './components/Nav/Nav'
import Account from './pages/Account/Account';
import Doctors from './pages/Doctors/Doctors';
import Schedule from './pages/Schedule/Schedule';
// import Departments from './pages/Departments/Departments'

// import Home from './pages/Home/Home'
// import About from './pages/About/About'
//#endregion

import { Route, Routes } from 'react-router-dom' 

//#region Functional Components
function App() {

  return (
    <div className='App'>
      <Nav />

      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        {/* <Route path='/departments' element={<Departments />} /> */}
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/account' element={<Account />} />
      </Routes>

    </div>
  )
}
//#endregion

export default App
