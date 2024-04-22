import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getVisits } from '../../actions/visits.js'

import Visits from '../../components/account/Visits'
import './account.css'

export default function Account({ setCurrentId}) {
  // const [currentId, setCurrentId] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVisits())
  }, [dispatch])

  return (
    <div className='Account'>
      <h1>Upcoming Visits</h1>
      <div>
        <Visits setCurrentId={setCurrentId}/>
      </div>
      <h1>Past Visits</h1>
    </div>
  )
}
