import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getVisits } from '../../actions/visits.js'

import Location from '../../components/schedule/Location.jsx'
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
        <Location />

        {/* middle and right sections, 2/3 */}
        <div className='schedule'>
          <Form currentId={currentId} setCurrentId={setCurrentId}/>
        </div>
      </div>
    </div>
  )
}
