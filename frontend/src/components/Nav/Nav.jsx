import './nav.css'

import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='Nav'>
      
      <ul>
        <li>
          <h2>National<br />Urgent Care<br />System</h2>
        </li>
        <li>
          <Link to="/">Home</Link>
          {/* <Link to="/departments">Departments</Link> */}
        </li>
        <li>
          <Link to="/doctors">Find a Doctor</Link>
        </li>
        <li>
            <Link to="/schedule">Schedule Appointments Online</Link>
        </li>
        <li>
            <Link to="/account">My Health Account</Link>
        </li>
      </ul>
    </nav>
  )
}
