import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div className='main'>
      <h1 className='hero-header'>National Urgent Care System</h1>
      <p className='hero-text'>Quality care ranked among the best in the nation. We are here to help.</p>
      
      <div className='row-main'>
        <div className='div-button1'>
            <Link to='/schedule'>
                Schedule Appointments Online
            </ Link>
        </div>
        <div className='div-button2'>
            <Link to='/doctors'>
                Find a Doctor
            </ Link>
        </div>
        <div className='div-button3'>
            <Link to='/'>
                Find a Location
            </ Link>
        </div>
        <div className='div-button4'>
            <Link to='/account'>
                Go to my Health Account
            </ Link>
        </div>
      </div>
    </div>
  )
}
