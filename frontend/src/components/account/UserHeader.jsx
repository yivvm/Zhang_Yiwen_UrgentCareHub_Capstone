import React from 'react'
import { Link } from 'react-router-dom'

import './userheader.css'

export default function UserHeader() {
  return (
    <div className='user-header'>
      <ul>
        <li>
          <Link to="/account">Visits</Link>
          {/* <Link to="/departments">Departments</Link> */}
        </li>
        <li>
          <Link to="/">Messages</Link>
        </li>
        <li>
            <Link to="/">Tests</Link>
        </li>
        <li>
            <Link to="/">More</Link>
        </li>
        <li>
            <p>User: Admin</p>
        </li>
      </ul>
    </div>
  )
}
