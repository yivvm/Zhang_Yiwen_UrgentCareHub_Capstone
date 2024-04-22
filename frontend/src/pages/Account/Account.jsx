import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getVisits } from '../../actions/visits.js'

import Visits from '../../components/account/Visits'
import './account.css'

export default function Account() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVisits())
  }, [dispatch])

  return (
    <div className='Home'>
      <h1>Upcoming Visits</h1>
      <div>
        <Visits />
      </div>
      <h1>Past Visits</h1>
    </div>
  )
}
