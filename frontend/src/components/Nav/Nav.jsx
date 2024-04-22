import './nav.css'

import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='Nav'>
      <ul>
        <li>
          <Link to="/">Home</Link>
          {/* <Link to="/departments">Departments</Link> */}
        </li>
        <li>
          <Link to="/doctors">Find a Doctor</Link>
        </li>
        <li>
            <Link to="/schedule">Schedule Appointment Online</Link>
        </li>
        <li>
            <Link to="/account">My Health Account</Link>
        </li>
      </ul>
    </nav>
  )
}
