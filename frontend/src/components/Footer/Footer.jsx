import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
  return (
    <div className='Footer'>
      <div className='row-footer'>
        <div className='div-footer'>
          <h1>National<br />Urgent Care<br />System</h1>
        </div>

        <div className='div-footer'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Departments</Link>
            </li>
            <li>
              <Link to="/doctors">Find a Doctor</Link>
            </li>
            <li>
              <Link to='/'>Find a Location</ Link>
            </li>
            <li>
                <Link to="/schedule">Schedule Appointments Online</Link>
            </li>
            <li>
                <Link to="/account">My Health Account</Link>
            </li>
          </ul>
        </div>

        <div className='div-footer'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Departments</Link>
            </li>
            <li>
              <Link to="/doctors">Find a Doctor</Link>
            </li>
            <li>
              <Link to='/'>Find a Location</ Link>
            </li>
            <li>
                <Link to="/schedule">Schedule Appointments Online</Link>
            </li>
            <li>
                <Link to="/account">My Health Account</Link>
            </li>
            <li>
              <Link to='/'>Contact Us</ Link>
            </li>
            <li>
              <Link to='/'>More</ Link>
            </li>
          </ul>
        </div>

        <div className='div-footer-me'>
          <ul>
            <li>
              <Link to="https://github.com/yivvm/My-Projects">About Me</Link>
            </li>
            
          </ul>
        </div>
      </div>

      <div className='copyright'>
        <p className='copyright-text'>Copyright © 2024 National Urgent Care System by <Link to='https://github.com/yivvm' className='copyright-text-link'>Yiwen Zhang</Link></p>
      </div>
    </div>
  )
}
