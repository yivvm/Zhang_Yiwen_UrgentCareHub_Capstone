import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getVisits } from '../../actions/visits.js'

import Form from '../../components/schedule/Form'
import './schedule.css'

export default function Schedule() {
  const [currentId, setCurrentId] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVisits())
  }, [dispatch])

  return (
    <div className='schedule-page'>
      <h1>Schedule Appointment Online</h1>
      <div className='row'>
        {/* left section, 1/3 */}
        <div className='location'>
          <h2>National Urgent Care Dry Tortugas</h2>
          <p><strong>Address:</strong> 1400 Whitehead St, Key West, FL 33040</p>
          <div className='image-container'>
            <img src={`../images/location.png`} alt="the map of National Urgent Care Dry Tortugas"/>
          </div>
          <br />

          <div>
            <p id="open"><strong>Hours of operation:</strong></p>
            <p>Monday to Friday: 8AM - 8PM EST</p>
            <p>Saturday & Sunday: 9AM - 6PM EST</p>
          </div>
          <br />
          <div>
                <p id="current-time">Current Local Time:</p>
            </div>
        </div>

        {/* middle and right sections, 2/3 */}
        <div className='schedule'>
          <Form currentId={currentId} setCurrentId={setCurrentId}/>
        </div>
      </div>
    </div>
  )
}
